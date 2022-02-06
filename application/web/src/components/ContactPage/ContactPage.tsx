export function ContactPage() {
    return (
        <div>
            <p className="h1 font-weight-bold">Kontakt</p>
            <p className="text-secondary font-middle">
                Potřebuješ s něčím poradit? Máš skvělý nápad na zlepšení aplikace? Nevahej nás kontaktovat!
            </p>
            <div className="d-flex flex-column mb-2 text-secondary">
                <span>Our Facebook group <a href="https://www.facebook.com/groups/metrbot" target="_blank"
                                            rel="noreferrer">Metrbot</a>
                </span>
                <span>Application is opensource and development is located on <a
                    href="https://github.com/ChrnyaevEK/metr" target="_blank"
                    rel="noreferrer">GitHub</a>
                </span>
            </div>
        </div>
    )
}

export default ContactPage