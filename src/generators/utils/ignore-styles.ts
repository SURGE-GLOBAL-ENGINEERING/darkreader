export const IGNORE_SELECTORS = ['.darkreader-ignore', '.no-darkreader', '[data-darkreader-ignore]'];
export const IGNORE_ANCESTOR_SELECTORS = ['.darkreader-ignore-ancestors', '[data-darkreader-ignore-ancestors]'];

export function shouldIgnoreElement(element: HTMLElement) {
    if (!element || !element.matches) {
        return false;
    }
    // Check if element itself should be ignored
    if (IGNORE_SELECTORS.some(selector => element.matches(selector))) {
        return true;
    }
    
    // Check if any ancestor should cause this element to be ignored
    if (element.closest(IGNORE_ANCESTOR_SELECTORS.join(','))) {
        return true;
    }
    
    return false;
}