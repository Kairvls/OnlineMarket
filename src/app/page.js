'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        // Send login request
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        // Check if the login is successful
        if (response.ok) {
            // Redirect to the dashboard if login is successful
            router.push('/dashboard'); // Ensure you have this page in the app
        } else {
            const data = await response.json();
            // Show error message from the backend (if any)
            alert(data.error || 'Login failed');
        }
    };

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'} // Toggle input type based on showPassword state
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                        {/* Eye Icon for Show/Hide Password */}
                        <div
                            className="absolute mt-3 right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)} // Toggle the state on click
                        >
                            {showPassword ? (
                                <AiFillEyeInvisible size={24} className="text-gray-600" />
                            ) : (
                                <AiFillEye size={24} className="text-gray-600" />
                            )}
                        </div>
                    </div>

                    {/* Login Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
                        >
                            Login
                        </button>
                    </div>
                </form>

                {/* Go to Signup Link */}
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <a href="/signup" className="text-indigo-600 hover:text-indigo-800">
                            Go to Signup
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
