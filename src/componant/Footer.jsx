

const Footer = () => {
    return (
        <footer className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-2">
<div className="bg-[#1F2937] p-20">
    <h2 className="text-white font-medium text-3xl mb-6">CONTACT US</h2>
    <p className="text-white font-medium text-xl">
    123 ABS Street, Uni 21, Bangladesh <br />
+88 123456789 <br />
Mon - Fri: 08:00 - 22:00 <br />
Sat - Sun: 10:00 - 23:00
    </p>
</div>
<div className="bg-[#111827] p-20">
    <h2 className="font-medium text-3xl text-white">Follow US</h2>
    <p className="text-white font-medium text-xl">Join us on social media</p>
</div>
            </div>
            <div className="p-4 bg-[#151515]"><p className="text-white font-medium text-xl">Copyright © CulinaryCloud. All rights reserved.</p></div>
        </footer>
    );
};

export default Footer;
