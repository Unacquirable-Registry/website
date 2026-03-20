# website
Public website for the UnAcquirable Registry – a directory of enterprises that can never be sold.

UnAcquirable Registry – Website
Built to Last, Locked to Mission

https://img.shields.io/badge/License-MIT-yellow.svg
https://img.shields.io/badge/SvelteKit-2.0+-ff3e00
https://img.shields.io/badge/Tailwind-4.0-38bdf8

This repository contains the public‑facing website of the UnAcquirable Registry – a global directory of enterprises that are legally locked from ever being sold. Here you can browse verified businesses, submit new candidates, and help build an economy that prioritizes mission over extraction.

📖 Table of Contents
About the Project

Features

Tech Stack

Getting Started

Prerequisites

Installation

Environment Variables

Usage

Public Pages

Admin Dashboard

Contributing

License

Contact

📌 About the Project
The UnAcquirable Registry is a community‑driven initiative to make visible those enterprises that have chosen a different path: perpetual purpose trusts, worker cooperatives, employee‑owned companies, and other structures that legally prevent acquisition by extractive capital.

This website allows anyone to:

Browse a curated list of verified un‑acquirable enterprises.

Submit new enterprises for review.

Administrators (with simple password protection) to approve or reject submissions.

The project is fully open source, and its code is designed to be hosted on Cloudflare's serverless platform (Workers + D1) for low cost and global reach.

✨ Features
Public Enterprise List – Searchable, filterable table of verified businesses.

Submission Form – Anyone can propose a new enterprise (name, type, jurisdiction, website, description, contact email).

Admin Approval – Simple password‑protected area to review, approve, or reject pending submissions.

Mobile‑Responsive – Clean, modern UI built with Tailwind CSS.

Database – SQLite (development) / Cloudflare D1 (production) for simplicity and scalability.

🛠 Tech Stack
Component	Technology
Framework	SvelteKit (full‑stack, server‑side rendering)
Styling	Tailwind CSS
Database	SQLite (dev) → Cloudflare D1 (prod)
Authentication	Basic password (prototype); upgrade to Cloudflare Access later
Hosting	Cloudflare Pages + Workers (planned)
🚀 Getting Started
Prerequisites
Node.js 18+ and npm/pnpm

Git

(Optional) Cloudflare account for production deployment

Installation
Clone the repository:

bash
git clone https://github.com/Unacquirable-Registry/website.git
cd website
Install dependencies:

bash
npm install
Set up the database:

bash
npm run db:init   # creates a local SQLite database and runs migrations
Start the development server:

bash
npm run dev
Open http://localhost:5173 in your browser.

Environment Variables
Create a .env file in the root with the following (adjust as needed):

env
# Admin password (change this!)
ADMIN_PASSWORD=your-secure-password

# Database path (default: sqlite://./data/registry.db)
DATABASE_URL=sqlite://./data/registry.db

# Public site URL (used for links)
PUBLIC_SITE_URL=http://localhost:5173
For production on Cloudflare, you'll use environment variables through the Cloudflare dashboard.

📱 Usage
Public Pages
Homepage – Introduction and searchable enterprise list.

Submit – Form to propose a new enterprise. After submission, the entry appears in the pending table.

Admin Dashboard
Visit /admin and enter the password.

View all pending submissions.

Approve (moves to public list) or reject (with optional note) submissions.

(Future) Edit or remove existing enterprises.

🤝 Contributing
We welcome contributions! Whether it's code, design, documentation, or data.

Please read our Contributing Guidelines and Code of Conduct before submitting a pull request.

Ways to contribute:

Improve the UI/UX

Add tests

Suggest new features

Help verify and add enterprise data

Translate the site

📄 License
The source code in this repository is licensed under the MIT License. See the LICENSE file for details.

Note: The enterprise data itself is stored in a separate repository and licensed under the Open Database License (ODbL).

📬 Contact
Organization: UnAcquirable Registry

Public email: public@unacquirableregistry.org

X / Twitter: @UnAcquirableReg (placeholder)

For attorneys / legal inquiries: call 350-229-1046

Built to Last, Locked to Mission
Help us build the infrastructure for an economy that can't be bought.
