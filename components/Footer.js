import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; Music Events by Hannah</p>
            <p>
                <Link href="/about">About this Project</Link>
            </p>
        </footer>
    );
}
