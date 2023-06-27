import css from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.main}>
                <p>© 2023 Daniel Aldridge. All rights reserved.</p>
                <p>Made with love, React and plenty of coffee.</p>
            </div>
        </footer>
    )
}