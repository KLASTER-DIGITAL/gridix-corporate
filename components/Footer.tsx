import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="border-t bg-slate-50 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900">Products</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="/smart-catalog" className="hover:text-blue-600">Smart Catalog</Link></li>
                            <li><Link href="/developer-workspace" className="hover:text-blue-600">Developer Workspace</Link></li>
                            <li><Link href="/solutions/agencies" className="hover:text-blue-600">Agency Workspace</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900">Solutions</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="/solutions/developers" className="hover:text-blue-600">For Developers</Link></li>
                            <li><Link href="/solutions/agencies" className="hover:text-blue-600">For Agencies</Link></li>
                            <li><Link href="/solutions/brokers" className="hover:text-blue-600">For Brokers</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900">Resources</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="/cases" className="hover:text-blue-600">Case Studies</Link></li>
                            <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
                            <li><Link href="/help" className="hover:text-blue-600">Help Center</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-blue-600">Careers</Link></li>
                            <li><Link href="/partners" className="hover:text-blue-600 font-medium text-blue-700">Partner Program</Link></li>
                            <li><Link href="/contacts" className="hover:text-blue-600">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900">Legal</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-blue-600">Terms of Service</Link></li>
                            <li><Link href="/cookies" className="hover:text-blue-600">Cookies Settings</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="font-bold text-lg text-slate-900">GRIDIX</span>
                        <p className="text-sm text-slate-500">
                            © {new Date().getFullYear()} Gridix. All rights reserved.
                        </p>
                    </div>
                    <p className="text-sm text-slate-500 text-center md:text-right max-w-md">
                        Global HQ. Legal details available on Company page.
                    </p>
                </div>
            </div>
        </footer>
    );
}
