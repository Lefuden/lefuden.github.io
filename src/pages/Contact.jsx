export default function Contact() {
    return (
        <>
            <aside className="left">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut neque porro accusamus accusantium
                    perferendis numquam commodi sint quasi inventore expedita obcaecati officia blanditiis asperiores
                    cupiditate, suscipit ad dolores vitae!</p>
            </aside>

            <aside className="right">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat hic, a ea voluptatum
                    asperiores quos. Officiis voluptatibus dolorem temporibus impedit reprehenderit quod deserunt fugiat
                    sequi illum, voluptatem, quasi ullam.</p>
            </aside>

            <article className="main-content">
                <h2>Contact me</h2>
                <form action="/submit_form" target="_blank" method="post">
                    <fieldset className="field">
                        <legend>Got any questions? Lets connect!</legend>
                        <label htmlFor="name">Name</label><br />
                        <input type="text" id="name" name="name" placeholder="monkey businessman" /><br />

                        <label htmlFor="email">Email</label><br />
                        <input type="email" id="email" name="email" placeholder="email@email.email" /><br />

                        <label htmlFor="number">Phone number</label><br />
                        <input type="tel" id="tel" name="tel" placeholder="123-1234567890" /><br />

                        <label htmlFor="url">URL</label><br />
                        <input type="url" id="url" name="url" placeholder="www.url.com" /><br />

                        <label htmlFor="message">Suggestions</label><br />
                        <textarea id="message" name="message" placeholder="monkeys like bananas"></textarea><br />

                        <input type="submit" value="Submit" />
                    </fieldset>
                </form>
            </article>
        </>
    )
}