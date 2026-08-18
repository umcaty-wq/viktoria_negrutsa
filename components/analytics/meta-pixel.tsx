import Script from 'next/script'

const META_PIXEL_IDS = ['1470408635120480', '1424476722832104']

export function MetaPixel() {
  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          ${META_PIXEL_IDS.map((id) => `fbq('init', '${id}');`).join('\n          ')}
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <>
          {META_PIXEL_IDS.map((id) => (
            <img
              key={id}
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1`}
              alt=""
            />
          ))}
        </>
      </noscript>
    </>
  )
}
