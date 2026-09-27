export default function CookieNotice() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <div className="bg-yellow-100 text-yellow-800 border border-yellow-300 rounded-lg p-4 mb-8 text-sm font-bold">
        Placeholder text. To be updated with the café&apos;s official policy before launch.
      </div>
      
      <h1 className="font-heading font-bold text-4xl text-[var(--color-navy)] mb-8">
        Cookie Notice
      </h1>
      
      <div className="space-y-6 text-[var(--color-charcoal)] leading-relaxed">
        <p>
          This website uses cookies to improve your browsing experience. Cookies are small data files that are placed on your device when you visit a website.
        </p>
        <p>
          Currently, this demo website does not use any non-essential tracking or analytics cookies. Any cookies used are strictly for basic functionality, such as keeping the site secure and ensuring proper navigation.
        </p>
        <p>
          You can choose to disable cookies through your browser settings. However, please note that disabling certain cookies may affect the functionality of this website.
        </p>
        <p>
          For more information about how we use cookies, please contact us directly.
        </p>
      </div>
    </div>
  );
}
