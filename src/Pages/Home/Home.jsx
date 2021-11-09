import React, { useState } from 'react'
import { Cardstyle, Contentstyle, Counterstyle, Faqstyle, Featurestyle, Headerstyle } from './Home.style';
import classNames from 'classnames';


const Header = () => {
    return (
        <Headerstyle>
            <div className="banner">

                <article className="heading">
                    <h1>Lorem ipsum dolor sit amet consectetur</h1>
                    <p className="my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus id itaque, laboriosam similique laborum in! Dolor quasi earum modi dolores, delectus voluptatibus iste porro, vero quia accusamus quam magni doloremque.</p>
                    <button className="btn">Website</button>
                </article>

                <article className="banerimg">
                    <img src='./image/header2.jpeg' className="img-fluid" alt="web layout" />
                </article>

            </div >
        </Headerstyle >
    );
}

const Card = () => {
    return (
        <Cardstyle>
            <div className="row my-5">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Special title treatment</h3>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Special title treatment</h3>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Special title treatment</h3>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                        </div>
                    </div>
                </div>
            </div>
        </Cardstyle>

    );
}

const Feature = () => {
    return (
        <Featurestyle>
            <article>
                <img src="./image/product.jpeg" className="img-fluid" alt="product" />
            </article>
            <article>
                <article className="heading">
                    <h1>App Feature</h1>
                    <h2 className="my-4">Lorem ipsum dolor </h2>
                    <p className="my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus id itaque, laboriosam similique laborum in! Dolor quasi earum modi dolores, delectus voluptatibus iste porro, vero quia accusamus quam magni doloremque.</p>
                    <h2 className="my-4">Lorem ipsum dolor </h2>
                    <p className="my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus id itaque, laboriosam similique laborum in! Dolor quasi earum modi dolores, delectus voluptatibus iste porro, vero quia accusamus quam magni doloremque.</p>
                    <h2 className="my-4">Lorem ipsum dolor </h2>
                    <p className="my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus id itaque, laboriosam similique laborum in! Dolor quasi earum modi dolores, delectus voluptatibus iste porro, vero quia accusamus quam magni doloremque.</p>
                </article>
            </article>
        </Featurestyle>

    );
}

const Content = () => {
    return (
        <Contentstyle>

            <article>
                <img src="./image/product2.jpeg" className="img-fluid" alt="product" />
            </article>

            <article className="heading">
                <h3>Lorem ipsum dolor sit</h3>
                <p className="my-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus id itaque, laboriosam similique laborum in! Dolor quasi earum modi dolores, delectus voluptatibus iste porro, vero quia accusamus quam magni doloremque.</p>
            </article>


        </Contentstyle >
    );

}

const Faq = () => {

    const [colapse, setColapse] = useState(false)

    const toggle = () => {
        setColapse(!colapse)
    }

    return (
        <Faqstyle>
            <article>
                <h1>FAQ</h1>
                <article className="togle my-5">
                    <h2 onClick={toggle}>Lorem</h2>
                    <img onClick={toggle} src="./image/icon.png" className="icon" alt="product" />
                    <p className={classNames({ 'text': true, 'show-text': colapse })}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eveniet adipisci harum aliquam, natus veniam officia rerum ratione nisi quas quasi ex iusto at modi nostrum.Debitis fugiat quae perspiciatis laboriosam.
                    </p>
                </article>
                <article className="togle my-5">
                    <h2 onClick={toggle}>Lorem</h2>
                    <img onClick={toggle} src="./image/icon.png" className="  icon" alt="product" />
                    <p className={classNames({ 'text': true, 'show-text': colapse })}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eveniet adipisci harum aliquam, natus veniam officia rerum ratione nisi quas quasi ex iusto at modi nostrum.Debitis fugiat quae perspiciatis laboriosam.
                    </p>
                </article>
            </article>



            <article>
                <img src="./image/card.jpeg" alt="product" />
            </article>


        </Faqstyle >
    );

}

const Counter = () => {
    return (
        <Counterstyle>
            <article className="counter">
                <article>
                    <h1>100K</h1>
                    <p>website</p>
                </article>
                <article>
                    <h1 className="line">100M</h1>
                    <p>website</p>
                </article>
                <article>
                    <h1>100K</h1>
                    <p>website</p>
                </article>
            </article>
            <button className="btn">Subcribe Now!</button>
        </Counterstyle>
    )
}

function Home() {
    return (
        <>
            <Header />
            <Card />
            <Feature />
            <Content />
            <Faq />
            <Counter />

        </>
    )
}

export default Home;
