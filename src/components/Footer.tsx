const Footer = () => {
  return (
    <footer className="bg-slate-200 text-slate-700 p-8 mt-12"> 
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Nutritionist Site. All rights reserved.</p>
        <p className="mt-2 text-sm text-slate-500">
          Disclaimer: The information provided on this website is for general informational purposes only, and does not constitute medical advice. Always consult with a qualified healthcare professional for any health concerns or before making any decisions related to your health or treatment.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
