import './ContactPage.css'

export function ContactPage() {
    return (
        <div>
            <h1 className="font-weight-bold">Kontakt</h1>
            <p className="text-secondary font-middle">
                Potřebuješ s něčím poradit? Máš skvělý nápad na zlepšení aplikace? Nevahej nás kontaktovat!
            </p>
            <div className="d-flex flex-column mb-5">
                <div className="d-flex justify-content-between mb-2">
                    <span className="font-weight-bold">Facebook</span>
                    <a href="https://www.facebook.com/groups/metr.application" target="_blank">Metr on Facebook</a>
                </div>
                <div className="d-flex justify-content-between">
                    <span className="font-weight-bold">GitHub</span>
                    <a href="https://github.com/ChrnyaevEK/metr" target="_blank">Metr on GitHub</a>
                </div>
            </div>
            <a href="https://www.facebook.com/cherniaev.public" target="_blank" className="contact-link">
                It's a me, Mario!
            </a>
        </div>
    )
}

export default ContactPage