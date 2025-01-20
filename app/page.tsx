import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>My React Components</h1>
      <ul>
        <li><Link href="/account-page">Account Page</Link></li>
        <li><Link href="/explore-page">Explore Page</Link></li>
        <li><Link href="/item-detail">Item Detail</Link></li>
        <li><Link href="/login-view">Login View</Link></li>
        <li><Link href="/new-item-form">New Item Form</Link></li>
        <li><Link href="/search-results">Search Results</Link></li>
        <li><Link href="/user-profile">User Profile</Link></li>
      </ul>
    </div>
  );
}