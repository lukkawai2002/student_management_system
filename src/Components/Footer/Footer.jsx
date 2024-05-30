
function Footer() {

    return (
        <div>
            <footer className="bg-dark text-center text-white">
                <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", fontSize: "20px" }}>
                    © {new Date().getFullYear()} Copyright : Ken
                </div>
            </footer>
        </div>
    );
}

export default Footer;