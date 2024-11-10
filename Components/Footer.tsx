import Link from "next/link";

export default function Footer(){
    return(
        
        <footer className="footer">
            <p>© 2024 Ifrah. All Rights Reserved.</p>
            <p>Contact: farooqiiafra@gmail.com</p>
            <p>
                <Link className="footer-link" href="https://github.com/Ifrah178">GitHub</Link> |  
                <Link className="footer-link" href="https://www.instagram.com/ifrah.farooqi">Instagram</Link>
                </p>
        </footer>
    );
}