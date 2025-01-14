import { db } from '@/lib/db'; // Your database connection

const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth radius in kilometers
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
};

const robinsonCoordinates = { lat: 11.0096, lng: 124.6026 }; // Robinsons Place Ormoc

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { customerId, itemId, latitude, longitude, address } = req.body;

            if (!customerId || !itemId || !latitude || !longitude || !address) {
                return res.status(400).json({ error: 'All fields are required.' });
            }

            // Fetch item details
            const [item] = await db.execute(`SELECT price_per_kg FROM items WHERE id = ?`, [itemId]);
            if (item.length === 0) {
                return res.status(404).json({ error: 'Item not found.' });
            }

            const pricePerKg = item[0].price_per_kg;

            // Calculate distance and shipping cost
            const distance = haversineDistance(
                latitude,
                longitude,
                robinsonCoordinates.lat,
                robinsonCoordinates.lng
            );

            const isWithinScope = distance <= 30; // 30 km radius
            const shippingCost = isWithinScope ? distance * 10 : 0; // Example cost: PHP 10/km

            // Save to database
            const query = `
                INSERT INTO shipping_info (customer_id, item_id, latitude, longitude, address, distance_from_store, shipping_cost, is_within_scope)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `;
            await db.execute(query, [
                customerId,
                itemId,
                latitude,
                longitude,
                address,
                distance,
                shippingCost,
                isWithinScope,
            ]);

            return res.status(200).json({
                success: true,
                message: 'Shipping information saved successfully.',
                isWithinScope,
                shippingCost,
                pricePerKg,
                totalPrice: isWithinScope ? pricePerKg + shippingCost : 'Out of scope',
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error.' });
        }
    } else {
        return res.status(405).json({ error: 'Method not allowed.' });
    }
}
