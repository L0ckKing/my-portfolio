import CardNav from './Cardnav';
import logo from '../assets/react.svg';

export default function Topbar  () {
const items = [
  {
    label: "Main",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      { label: "Home", ariaLabel: "Home", href: "/#" },
      { label: "About Me", ariaLabel: "About Me", href: "/#/cv" }
    ]
  },
  {
    label: "Projects", 
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      { label: "Academic", ariaLabel: "School Projects", href: "/#/projects/school" },
      { label: "Personal", ariaLabel: "Personal Projects", href: "/#/projects/personal" }
    ]
  },
  {
    label: "Contact",
    bgColor: "#160b2a", 
    textColor: "#fff",
    links: [
      { label: "Email", ariaLabel: "Email Me", href: "/#/extra" },
      { label: "Github", ariaLabel: "Github", href: "https://github.com/L0ckKing" },
      { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-sadqui/" }
    ]
  }
];

  return (
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#ffffff"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
      theme='dark'
      className="fixed top-0 left-0 w-full z-50"
/>
  );
};