'use client';

import React from 'react';
export default function Newsletter() {
  return (
    <section className="space-y-0 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-md text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light sm:text-xl md:mb-12">
            Stay up to date with roadmap progress, announcements, and exclusive
            discounts. Sign up with your email.
          </p>
          <form
            action="#"
            className="space-y-4 sm:flex sm:items-center sm:justify-center sm:space-y-0"
          >
            <div className="relative w-full sm:max-w-xs">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 w-full rounded-lg border border-gray-300 bg-transparent p-3 pl-10 text-sm text-white placeholder-gray-400 dark:border-gray-600"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-3 text-sm font-medium text-white focus:ring-4 sm:w-auto sm:rounded-l-none"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500">
            We care about the protection of your data.{' '}
            <a
              href="#"
              className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
            >
              Read our Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
