import React from 'react';
import Nav from '../components/Nav';
import SignInForm from '../components/FormPage/SignInForm';
import Footer from '../components/Footer';

function SignInPage() {
    return (
        <div>
            <Nav />
            <main className="main bg-dark">
                <SignInForm />
            </main>
            <Footer />
        </div>
    )
}

export default SignInPage;
