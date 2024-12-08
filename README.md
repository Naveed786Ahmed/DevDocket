<h1>📦 API Name</h1>
<p><strong>Description:</strong> A simple REST API for managing product categories and details for both men and women clothing.</p>

<h2>📚 Table of Contents</h2>
<ul>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <li><a href="#how-to-run">How to Run</a></li>
    <li><a href="#technologies-used">Technologies Used</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>

<h2 id="introduction">🚀 Introduction</h2>
<p>This API provides endpoints to access data related to <strong>Women Clothes</strong> and <strong>Men Clothes</strong>, including categories, fabrics, and specific product details. It is designed to help developers integrate ready-made mock data for e-commerce websites or similar projects.</p>

<h2 id="features">✨ Features</h2>
<ul>
    <li>📦 <strong>Access Clothing Data</strong> (Men & Women)</li>
    <li>🔍 <strong>Filter by Categories & Fabrics</strong></li>
    <li>🛠️ <strong>Simple & Clean API Routes</strong></li>
</ul>

<h2 id="api-endpoints">🌐 API Endpoints</h2>

<h3>🧥 Women Clothes Routes</h3>
<table>
    <tr>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>GET</td>
        <td><code>/womenclothes</code></td>
        <td>Get all women's clothes</td>
    </tr>
    <tr>
        <td>GET</td>
        <td><code>/womenclothes/:id</code></td>
        <td>Get a specific product by ID</td>
    </tr>
    <tr>
        <td>GET</td>
        <td><code>/womenclothes/categories/:category</code></td>
        <td>Get products by category</td>
    </tr>
    <tr>
        <td>GET</td>
        <td><code>/womenclothes/fabrics/:fabric</code></td>
        <td>Get products by fabric</td>
    </tr>
</table>

<h3>🧢 Men Clothes Routes</h3>
<table>
    <tr>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>GET</td>
        <td><code>/menclothes</code></td>
        <td>Get all men's clothes</td>
    </tr>
    <tr>
        <td>GET</td>
        <td><code>/menclothes/:id</code></td>
        <td>Get a specific product by ID</td>
    </tr>
    <tr>
        <td>GET</td>
        <td><code>/menclothes/categories/:category</code></td>
        <td>Get products by category</td>
    </tr>
    <tr>
        <td>GET</td>
        <td><code>/menclothes/fabrics/:fabric</code></td>
        <td>Get products by fabric</td>
    </tr>
</table>
