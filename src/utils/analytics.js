/**
 * Safe wrapper for sending events to Google Analytics (gtag.js)
 * Prevents crashes if Google Analytics is blocked by ad-blockers.
 */
export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

// Track WhatsApp and CTA button clicks with location context
export const trackCtaClick = (location) => {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: 'WhatsApp Appointment',
    location: location, // e.g., 'hero', 'floating_button', 'contact_form_submit'
  })
}

// Track social media link clicks
export const trackSocialClick = (platform) => {
  trackEvent('social_click', {
    event_category: 'engagement',
    event_label: platform, // e.g., 'instagram', 'facebook'
  })
}

// Track navigation link clicks
export const trackNavigationClick = (destination) => {
  trackEvent('navigation_click', {
    event_category: 'engagement',
    event_label: destination, // e.g., 'hero_waze', 'location_waze'
  })
}

// Track portfolio slider interactions (only once per slider to avoid noise)
export const trackSliderInteract = (index) => {
  trackEvent('slider_interact', {
    event_category: 'engagement',
    event_label: `Slider ${index + 1}`,
    slider_index: index,
  })
}

// Track gallery lightbox media views
export const trackGalleryView = (index, type) => {
  trackEvent('gallery_view', {
    event_category: 'engagement',
    event_label: `${type} ${index + 1}`,
    item_type: type, // 'image' or 'video'
    gallery_index: index,
  })
}

// Track lead form interactions
export const trackLeadFormStart = () => {
  trackEvent('lead_form_start', {
    event_category: 'lead',
  })
}

export const trackLeadFormSubmit = (success = true) => {
  trackEvent('lead_form_submit', {
    event_category: 'lead',
    status: success ? 'success' : 'failed',
  })
}
