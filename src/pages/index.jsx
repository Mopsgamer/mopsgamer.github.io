import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from "@site/src/components/HomepageFeatures"

export default function Hello() {
    return (
        <Layout wrapperClassName='interesting-background' title="Hello" description="Hello React Page">
            <div className='bg'></div>
            <HomepageFeatures />
        </Layout>
    );
}