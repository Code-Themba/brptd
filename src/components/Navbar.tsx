export default function Navbar() {
  return (
    <nav>
      <div>
        <a href="/">BlueRabbit Print to Digital</a>
      </div>
      <ul>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/how-it-works">How It Works</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
        <li>
          <a href="/faq">FAQ</a>
        </li>
      </ul>
      <div className="cta-links">
        <a href="#" className="get-started">
          Get Started
        </a>
      </div>
    </nav>
  );
}
