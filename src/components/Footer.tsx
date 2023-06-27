import css from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.main}>
                <h1 className={css.copyright}>© 2023 Daniel Aldridge. All rights reserved.</h1>
            </div>
        </footer>
    )
}