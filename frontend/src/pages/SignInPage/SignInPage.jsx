import React from 'react';
import Nav from '../components/Nav';
import SignInForm from '../components/Form/SignInForm'; // Import correct de SignInForm
import Footer from '../components/Footer';

function SignInPage() {
    return (
        <div>
            <Nav />
            <main className="main bg-dark">
                <SignInForm /> {/* Utilisation correcte de SignInForm */}
            </main>
            <Footer />
        </div>
    );
}

export default SignInPage;
