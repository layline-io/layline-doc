import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import Link from "@docusaurus/Link";

export default function NotFound() {
    return (
        <>
            <PageMetadata
                title={translate({
                    id: 'theme.NotFound.title',
                    message: 'Page Not Found',
                })}
            />
            <Layout>
                <main className="container margin-vert--xl">
                    <div className="row">
                        <div className="col col--6 col--offset-3">
                            <h1 className="hero__title">
                                <Translate
                                    id="theme.NotFound.title"
                                    description="The title of the 404 page">
                                    Oops!
                                </Translate>
                            </h1>
                            <p>
                                <Translate
                                    id="theme.NotFound.p1"
                                    description="The first paragraph of the 404 page">
                                    The page you are looking for has likely been moved.
                                </Translate>
                            </p>
                            <p>
                                {/*<Translate*/}
                                {/*  id="theme.NotFound.p2"*/}
                                {/*  description="The 2nd paragraph of the 404 page">*/}
                                <Link to="/search">Search</Link>
                                {/*</Translate>*/}
                            </p>
                            <p><Link to="/index">Home</Link></p>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}
