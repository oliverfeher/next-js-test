import Link from 'next/link';
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <a href="/" className="logo-container"><Image alt="site-logo" width="64" height="64" className="nerddeals_logo" src='/nerddeals_logo.png'/></a>
      <p className="logo-title">the tech deals universe</p>
    </header>
  )
}
