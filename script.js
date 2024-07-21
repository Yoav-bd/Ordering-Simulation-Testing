const priceTable = {
    'Fine Art Paper': { '30x20': 70, '40x30': 100, '60x40': 180, '70x50': 240, '90x60': 280, '100x70': 350, '120x80': 500, '130x90': 580, '150x100': 750 },
    'Laminated Print': { '30x20': 70, '40x30': 100, '60x40': 180, '70x50': 240, '90x60': 280, '100x70': 350, '120x80': 500, '130x90': 580, '150x100': 750 },
    'Fine Art Cotton Paper': { '30x20': 90, '40x30': 120, '60x40': 220, '70x50': 280, '90x60': 350, '100x70': 430, '120x80': 600, '130x90': 720, '150x100': 900 }
};

const dibondPriceTable = {
    '30x20': 220, '40x30': 250, '60x40': 320, '70x50': 370, '90x60': 450, '100x70': 540, '120x80': 680, '130x90': 820, '150x100': 1000
};

const dibondNoBackFramePriceTable = {
    '30x20': 140, '40x30': 150, '60x40': 190, '70x50': 220, '90x60': 270, '100x70': 330, '120x80': 430, '130x90': 530, '150x100': 670
};

const diasecPriceTable = {
    '30x20': { 'Glossy': 350, 'Matt': 400, 'TruLife': 470 },
    '40x30': { 'Glossy': 460, 'Matt': 530, 'TruLife': 630 },
    '60x40': { 'Glossy': 680, 'Matt': 780, 'TruLife': 1030 },
    '70x50': { 'Glossy': 840, 'Matt': 960, 'TruLife': 1350 },
    '90x60': { 'Glossy': 1120, 'Matt': 1290, 'TruLife': 1910 },
    '100x70': { 'Glossy': 1360, 'Matt': 1550, 'TruLife': 2360 },
    '120x80': { 'Glossy': 1730, 'Matt': 1990, 'TruLife': 3120 },
    '130x90': { 'Glossy': 2040, 'Matt': 2350, 'TruLife': 3720 },
    '150x100': { 'Glossy': 2500, 'Matt': 2870, 'TruLife': 4670 }
};

const kapaPriceTable = {
    '30x20': { 'KAPA White (Line)': 60, 'KAPA Grey (Fix)': 90 },
    '40x30': { 'KAPA White (Line)': 80, 'KAPA Grey (Fix)': 110 },
    '60x40': { 'KAPA White (Line)': 100, 'KAPA Grey (Fix)': 150 },
    '70x50': { 'KAPA White (Line)': 130, 'KAPA Grey (Fix)': 180 },
    '90x60': { 'KAPA White (Line)': 160, 'KAPA Grey (Fix)': 220 },
    '100x70': { 'KAPA White (Line)': 190, 'KAPA Grey (Fix)': 270 },
    '120x80': { 'KAPA White (Line)': 250, 'KAPA Grey (Fix)': 360 },
    '130x90': { 'KAPA White (Line)': 300, 'KAPA Grey (Fix)': 430 },
    '150x100': { 'KAPA White (Line)': 380, 'KAPA Grey (Fix)': 550 }
};

const boxFramePriceTable = {
    '30x20': { 'Natural Wood or Painted': 400, 'Luxurious Wood': 500 },
    '40x30': { 'Natural Wood or Painted': 450, 'Luxurious Wood': 560 },
    '60x40': { 'Natural Wood or Painted': 590, 'Luxurious Wood': 740 },
    '70x50': { 'Natural Wood or Painted': 720, 'Luxurious Wood': 900 },
    '90x60': { 'Natural Wood or Painted': 850, 'Luxurious Wood': 1110 },
    '100x70': { 'Natural Wood or Painted': 980, 'Luxurious Wood': 1350 },
    '120x80': { 'Natural Wood or Painted': 1150, 'Luxurious Wood': 1570 },
    '130x90': { 'Natural Wood or Painted': 1450, 'Luxurious Wood': 1860 },
    '120x100': { 'Natural Wood or Painted': 1580, 'Luxurious Wood': 2000 },
    '150x100': { 'Natural Wood or Painted': 1800, 'Luxurious Wood': 2350 }
};

const floatingFramePriceTable = {
    '30x20': { 'Natural Wood or Painted': 350, 'Luxurious Wood': 460 },
    '40x30': { 'Natural Wood or Painted': 400, 'Luxurious Wood': 530 },
    '60x40': { 'Natural Wood or Painted': 500, 'Luxurious Wood': 690 },
    '70x50': { 'Natural Wood or Painted': 620, 'Luxurious Wood': 810 },
    '90x60': { 'Natural Wood or Painted': 730, 'Luxurious Wood': 980 },
    '100x70': { 'Natural Wood or Painted': 830, 'Luxurious Wood': 1110 },
    '120x80': { 'Natural Wood or Painted': 950, 'Luxurious Wood': 1300 },
    '130x90': { 'Natural Wood or Painted': 1150, 'Luxurious Wood': 1540 },
    '120x100': { 'Natural Wood or Painted': 1150, 'Luxurious Wood': 1540 },
    '150x100': { 'Natural Wood or Painted': 1300, 'Luxurious Wood': 1730 }
};

const aluminiumFramePriceTable = {
    '30x20': { 'Aluminium Profile': 250, 'Aluminum Profile - Wood Veneer': 300 },
    '40x30': { 'Aluminium Profile': 330, 'Aluminum Profile - Wood Veneer': 370 },
    '60x40': { 'Aluminium Profile': 370, 'Aluminum Profile - Wood Veneer': 430 },
    '70x50': { 'Aluminium Profile': 440, 'Aluminum Profile - Wood Veneer': 500 },
    '90x60': { 'Aluminium Profile': 520, 'Aluminum Profile - Wood Veneer': 620 },
    '100x70': { 'Aluminium Profile': 590, 'Aluminum Profile - Wood Veneer': 720 },
    '120x80': { 'Aluminium Profile': 680, 'Aluminum Profile - Wood Veneer': 850 },
    '130x90': { 'Aluminium Profile': 900, 'Aluminum Profile - Wood Veneer': 1100 },
    '150x100': { 'Aluminium Profile': 1280, 'Aluminum Profile - Wood Veneer': 1430 }
};

const noGlassFloatingFramesPriceTable = {
    '30x20': { 'Natural Wood or Painted': 430, 'Luxurious Wood': 610 },
    '40x30': { 'Natural Wood or Painted': 500, 'Luxurious Wood': 730 },
    '60x40': { 'Natural Wood or Painted': 600, 'Luxurious Wood': 960 },
    '70x50': { 'Natural Wood or Painted': 720, 'Luxurious Wood': 1120 },
    '90x60': { 'Natural Wood or Painted': 850, 'Luxurious Wood': 1380 },
    '100x70': { 'Natural Wood or Painted': 1050, 'Luxurious Wood': 1560 },
    '120x80': { 'Natural Wood or Painted': 1250, 'Luxurious Wood': 1810 },
    '130x90': { 'Natural Wood or Painted': 1450, 'Luxurious Wood': 2060 },
    '120x100': { 'Natural Wood or Painted': 1450, 'Luxurious Wood': 2060 },
    '150x100': { 'Natural Wood or Painted': 1580, 'Luxurious Wood': 2190 }
};

const lightBoxPriceTable = {
    '30x20': { 'Natural Wood or Painted': 800, 'Luxurious Wood': 950 },
    '40x30': { 'Natural Wood or Painted': 1200, 'Luxurious Wood': 1400 },
    '60x40': { 'Natural Wood or Painted': 1600, 'Luxurious Wood': 1850 },
    '70x50': { 'Natural Wood or Painted': 2000, 'Luxurious Wood': 2300 },
    '90x60': { 'Natural Wood or Painted': 2500, 'Luxurious Wood': 2850 },
    '100x70': { 'Natural Wood or Painted': 3000, 'Luxurious Wood': 3400 },
    '120x80': { 'Natural Wood or Painted': 4300, 'Luxurious Wood': 4800 },
    '130x90': { 'Natural Wood or Painted': 4900, 'Luxurious Wood': 5500 },
    '150x100': { 'Natural Wood or Painted': 6300, 'Luxurious Wood': 7000 }
};

const stretcherFramePriceTable = {
    '30x20': {'Stretcher frame + Stretching':185},
    '40x30': {'Stretcher frame + Stretching':230},
    '60x40': {'Stretcher frame + Stretching':280},
    '70x50': {'Stretcher frame + Stretching':330},
    '90x60': {'Stretcher frame + Stretching':400},
    '100x70': {'Stretcher frame + Stretching':450},
    '120x80': {'Stretcher frame + Stretching':500},
    '130x90': {'Stretcher frame + Stretching':550},
    '150x100': {'Stretcher frame + Stretching':700}
};


const boxFrameOriginalsPriceTable = {
    '30x20': { 'Natural Wood or Painted': 490, 'Luxurious Wood': 570 },
    '40x30': { 'Natural Wood or Painted': 550, 'Luxurious Wood': 645 },
    '60x40': { 'Natural Wood or Painted': 715, 'Luxurious Wood': 845 },
    '70x50': { 'Natural Wood or Painted': 860, 'Luxurious Wood': 1000 },
    '90x60': { 'Natural Wood or Painted': 1100, 'Luxurious Wood': 1280 },
    '100x70': { 'Natural Wood or Painted': 1275, 'Luxurious Wood': 1480 },
    '120x80': { 'Natural Wood or Painted': 1550, 'Luxurious Wood': 1795 },
    '130x90': { 'Natural Wood or Painted': 1765, 'Luxurious Wood': 2000 },
    '150x100': { 'Natural Wood or Painted': 2090, 'Luxurious Wood': 2380 }
};

const addonPriceTable = {
    'Anti-Reflective Glass': { '30x20': 90, '40x30': 160, '60x40': 280, '70x50': 400, '90x60': 590, '100x70': 760, '120x80': 1040, '130x90': 1260, '120x100': 1260, '150x100': 1610 },
    'Passepartout Box': { '30x20': 0, '40x30': 0, '60x40': 0, '70x50': 0, '90x60': 50, '100x70': 80, '120x80': 120, '130x90': 220, '150x100': 330 },
    'Passepartout Aluminum': { '30x20': 50, '40x30': 70, '60x40': 120, '70x50': 160, '90x60': 250, '100x70': 330, '120x80': 400, '130x90': 480, '150x100': 620 },
    'Museum-Quality Mat': { '30x20': 0, '40x30': 0, '60x40': 0, '70x50': 0, '90x60': 50, '100x70': 80, '120x80': 160, '130x90': 220, '120x100': 220, '150x100': 330 }
};

const translations = {
    'Print Only': 'הדפסה בלבד',
    'Print + Mount': 'הדפסה + הדבקה',
    'Print + Frame': 'הדפסה + מסגור',
    'Frame Only': 'מסגור בלבד',
    'Fine Art Paper': 'נייר פיין ארט',
    'Laminated Print': 'הדפסה עם למינציה',
    'Fine Art Cotton Paper': 'נייר פיין ארט 100% כותנה',
    'Box Frame': 'מסגור קופסה',
    'Floating Frame': 'מסגור צף',
    'Aluminium Frame': 'מסגור אלומיניום',
    'Floating Frame For Paintings': 'מסגור צף לציורים',
    'Light Box(Includes Printing)': 'קופסת אור (כולל הדפסה) ',
    'KAPA White (Line)': 'קאפה לבן (Line)',
    'KAPA Grey (Fix)': 'קאפה אפור (Fix)',
    'Dibond': 'דיבונד',
    'Diasec': 'דיאסק',
    'Glossy': 'מבריק',
    'Matt': 'מט',
    'TruLife': 'TruLife',
    'Natural Wood or Painted': 'עץ טבעי או צבוע',
    'Luxurious Wood': 'עץ יוקרתי',
    'Anti-Reflective Glass': 'זכוכית אנטי רפלקטיבית',
    'Museum-Quality Mat': 'שטיח באיכות מוזיאון',
    'Acid Free Passepartout': 'פספרטו נטול חומצה',
    'Stretcher Frame': 'מסגרת מתיחה',
    'Stretcher frame + Stretching':'מסגרת מתיחה + מתיחת קנבס',
    'Box Frame for Originals': 'מסגור קופסה לעבודות מקוריות',
    'Aluminium Profile':'פרופיל אלומיניום',
    'Aluminum Profile - Wood Veneer': 'פרופיל אלומיניום מצופה עץ',
    'Dibond(Includes Alu. Back Frame)': 'דיבונד (כולל מסגרת אלומיניום אחורית)',
    'Diasec(Includes Alu. Back Frame)': 'דיאסק (כולל מסגרת אלומיניום אחורית)'
};



document.getElementById('resetButton').addEventListener('click', () => {
    location.reload();
});

document.getElementById('productType').addEventListener('change', () => {
    resetOptions('productType');
    showOptions();
    updateSummary();
});

document.getElementById('paperType').addEventListener('change', () => {
    resetOptions('paperType');
    document.getElementById('printSizeOptions').classList.remove('hidden');
    populatePrintSizes();
    updateSummary();
});

document.getElementById('printSize').addEventListener('change', () => {
    resetOptions('printSize');
    const productType = document.getElementById('productType').value;
    const printSize = document.getElementById('printSize').value;
    const customSizeOption = document.documentElement.lang === 'he' ? 'מותאם אישית' : 'Custom';

    // Show custom size inputs when "Select a Custom Size" is chosen
    if (printSize === customSizeOption) {
        document.getElementById('customSizeOptions').classList.remove('hidden');
        document.getElementById('mountOptions').classList.add('hidden');
        document.getElementById('frameOptions').classList.add('hidden');
        document.getElementById('quantityOptions').classList.add('hidden');
        document.getElementById('addonOptions').classList.add('hidden');
        document.getElementById('frameDetails').classList.add('hidden');
    } else {
        document.getElementById('customSizeOptions').classList.add('hidden');
        
        if (productType === 'Print Only') {
            document.getElementById('quantityOptions').classList.remove('hidden');
        } else if (productType === 'Print + Mount') {
            document.getElementById('mountOptions').classList.remove('hidden');
        } else if (productType === 'Print + Frame') {
            document.getElementById('frameOptions').classList.remove('hidden');
        } else if(productType === 'Frame Only'){
            document.getElementById('frameOptions').classList.remove('hidden');
            populateFrameType();
        }
        populateMountTypes();
    }

    updateSummary();
});

document.getElementById('mountType').addEventListener('change', () => {
    resetOptions('mountType');
    const frameType = document.getElementById('frameType').value;
    const productType = document.getElementById('productType').value;
    if (productType === 'Print + Frame' && frameType !== 'Floating Frame') {
        document.getElementById('addonOptions').classList.remove('hidden');
        document.getElementById('quantityOptions').classList.remove('hidden');
    }
    showDiasecOptions();
    updateSummary();
});

document.getElementById('diasecType').addEventListener('change', updateSummary);

document.getElementById('frameType').addEventListener('change', () => {
    resetOptions('frameType');
    showFrameOptions();
    updateSummary();
});

document.getElementById('quantity').addEventListener('input', updateSummary);

// document.getElementById('languageButton').addEventListener('click', toggleLanguage);
document.getElementById('submitOrder').addEventListener('click', submitOrder);

document.querySelectorAll('#frameDetails input[type="radio"]').forEach(option => {
    option.addEventListener('change', updateSummary);
});

document.querySelectorAll('#addonOptions input[type="checkbox"]').forEach(option => {
    option.addEventListener('change', updateSummary);
});








function resetOptions(changedElement) {
    const elementsToReset = {
        'productType': ['paperTypeOptions', 'printSizeOptions', 'mountOptions', 'frameOptions', 'quantityOptions', 'frameDetails', 'addonOptions', 'diasecTypeOptions', 'customSizeOptions'],
        'paperType': ['printSizeOptions', 'mountOptions', 'frameOptions', 'quantityOptions', 'frameDetails', 'addonOptions', 'diasecTypeOptions', 'customSizeOptions'],
        'printSize': ['mountOptions', 'frameOptions', 'quantityOptions', 'frameDetails', 'addonOptions', 'diasecTypeOptions', 'customSizeOptions'],
        'frameType': ['mountOptions', 'quantityOptions', 'frameDetails', 'addonOptions', 'diasecTypeOptions', 'customSizeOptions'],
        'mountType': ['quantityOptions', 'addonOptions', 'diasecTypeOptions', 'customSizeOptions'],
    };

    if (changedElement in elementsToReset) {
        elementsToReset[changedElement].forEach(element => {
            document.getElementById(element).classList.add('hidden');
            document.getElementById(element).querySelectorAll('input, select').forEach(input => {
                if (input.type === 'radio' || input.type === 'checkbox') {
                    input.checked = false;
                } else {
                    input.value = '';
                }
            });
        });
    }

    // Ensure paper type visibility is reset
    document.getElementById('paperTypeOptions').classList.remove('hidden-no-space');
    
    switch (changedElement) {
        case 'productType':
            showOptions();
            break;
        case 'paperType':
            document.getElementById('printSizeOptions').classList.remove('hidden');
            populatePrintSizes();
            break;
        case 'printSize':
            const productType = document.getElementById('productType').value;
            if (productType === 'Print Only') {
                document.getElementById('quantityOptions').classList.remove('hidden');
            } else if (productType === 'Print + Mount') {
                document.getElementById('mountOptions').classList.remove('hidden');
            } else if (productType === 'Print + Frame') {
                document.getElementById('frameOptions').classList.remove('hidden');
                populateFrameType();
            } else if (productType === 'Frame Only') {
                document.getElementById('frameOptions').classList.remove('hidden');
                populateFrameType();
            }
            populateMountTypes();
            break;
        case 'frameType':
            showFrameOptions();
            break;
        case 'mountType':
            if (document.getElementById('mountType').value === 'Diasec') {
                document.getElementById('diasecTypeOptions').classList.remove('hidden');
            } else {
                document.getElementById('quantityOptions').classList.remove('hidden');
            }
            break;
    }
}






function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    if (currentLang === 'en') {
        localStorage.setItem('lang', 'he');
    } else {
        localStorage.setItem('lang', 'en');
    }
    location.reload(); // Reload the page to apply the language change
}

// Ensure the correct language is loaded on page load
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en';

    document.documentElement.lang = lang;
    if (lang === 'he') {
        document.body.classList.add('rtl');
        // Update text content for Hebrew
        document.getElementById('resetButton').innerHTML = 'איפוס <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 21C7.75 21 6.57917 20.7625 5.4875 20.2875C4.39583 19.8125 3.44583 19.1708 2.6375 18.3625C1.82917 17.5542 1.1875 16.6042 0.7125 15.5125C0.2375 14.4208 0 13.25 0 12H2C2 13.95 2.67917 15.6042 4.0375 16.9625C5.39583 18.3208 7.05 19 9 19C10.95 19 12.6042 18.3208 13.9625 16.9625C15.3208 15.6042 16 13.95 16 12C16 10.05 15.3208 8.39583 13.9625 7.0375C12.6042 5.67917 10.95 5 9 5H8.85L10.4 6.55L9 8L5 4L9 0L10.4 1.45L8.85 3H9C10.25 3 11.4208 3.2375 12.5125 3.7125C13.6042 4.1875 14.5542 4.82917 15.3625 5.6375C16.1708 6.44583 16.8125 7.39583 17.2875 8.4875C17.7625 9.57917 18 10.75 18 12C18 13.25 17.7625 14.4208 17.2875 15.5125C16.8125 16.6042 16.1708 17.5542 15.3625 18.3625C14.5542 19.1708 13.6042 19.8125 12.5125 20.2875C11.4208 20.7625 10.25 21 9 21Z" fill="#1C1B1F"/></svg>';
        document.querySelector('.total-cost-label').textContent = 'עלות כוללת:';
        document.getElementById('totalCost').textContent = '0 ₪';
        document.querySelector('.footnote p').innerHTML = 'המחירים המפורטים הם עבור גדלים סטנדרטיים. לקבלת הצעת מחיר עבור גדלים מותאמים אישית, אנא צרו איתנו קשר. <span style="color:black; font-weight:bold;">מינימום הזמנה של 750 ש"ח.</span>';
        document.getElementById('customWidth').placeholder = 'רוחב';
        document.getElementById('customHeight').placeholder = 'גובה';
        document.getElementById('customSizeButton').textContent = 'OK';
        translateToHebrew();
    } else {
        document.body.classList.remove('rtl');
        // Update text content for English
        document.getElementById('resetButton').innerHTML = 'Reset <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 21C7.75 21 6.57917 20.7625 5.4875 20.2875C4.39583 19.8125 3.44583 19.1708 2.6375 18.3625C1.82917 17.5542 1.1875 16.6042 0.7125 15.5125C0.2375 14.4208 0 13.25 0 12H2C2 13.95 2.67917 15.6042 4.0375 16.9625C5.39583 18.3208 7.05 19 9 19C10.95 19 12.6042 18.3208 13.9625 16.9625C15.3208 15.6042 16 13.95 16 12C16 10.05 15.3208 8.39583 13.9625 7.0375C12.6042 5.67917 10.95 5 9 5H8.85L10.4 6.55L9 8L5 4L9 0L10.4 1.45L8.85 3H9C10.25 3 11.4208 3.2375 12.5125 3.7125C13.6042 4.1875 14.5542 4.82917 15.3625 5.6375C16.1708 6.44583 16.8125 7.39583 17.2875 8.4875C17.7625 9.57917 18 10.75 18 12C18 13.25 17.7625 14.4208 17.2875 15.5125C16.8125 16.6042 16.1708 17.5542 15.3625 18.3625C14.5542 19.1708 13.6042 19.8125 12.5125 20.2875C11.4208 20.7625 10.25 21 9 21Z" fill="#1C1B1F"/></svg>';
        document.querySelector('.total-cost-label').textContent = 'Total Cost:';
        document.getElementById('totalCost').textContent = '0 NIS';
        document.querySelector('.footnote p').innerHTML = 'Prices listed are for standard sizes. For custom sizes, please contact us for a quote. <span style="color:black;">Minimum order of 750 NIS.</span>';
        document.getElementById('customWidth').placeholder = 'Width';
        document.getElementById('customHeight').placeholder = 'Height';
        document.getElementById('customSizeButton').textContent = 'OK';
        translateToEnglish();
    }
    updateInputImages(); // Ensure background images switch sides
    updateSummary(); // Ensure summary is updated after language change
});




function translateOptionsToHebrew() {
    document.querySelectorAll('#frameDetails label, #addonOptions label').forEach(label => {
        const originalText = label.textContent.split(' - ')[0].trim();
        label.innerHTML = label.innerHTML.replace(originalText, translations[originalText] || originalText);
    });
}

function translateOptionsToEnglish() {
    document.querySelectorAll('#frameDetails label, #addonOptions label').forEach(label => {
        const originalText = label.textContent.split(' - ')[0].trim();
        const translationKey = Object.keys(translations).find(key => translations[key] === originalText);
        if (translationKey) {
            label.innerHTML = label.innerHTML.replace(originalText, translationKey);
        }
    });
}

function updateInputImages() {
    const inputs = document.querySelectorAll('select, input[type="number"]');
    inputs.forEach(input => {
        if (document.documentElement.lang === 'he') {
            input.style.backgroundPosition = 'left 10px center';
        } else {
            input.style.backgroundPosition = 'right 10px center';
        }
    });
}

function translateToHebrew() {
    document.querySelector('h2').textContent = 'מחשבון מחירים';
    document.getElementById('labelProductType').textContent = 'מוצר';
    document.getElementById('labelPaperType').textContent = 'נייר';
    document.getElementById('labelPrintSize').textContent = 'הדפסה';
    document.getElementById('labelFrameType').textContent = 'מסגרת';
    document.getElementById('labelMountType').textContent = 'הדבקה';
    document.getElementById('labelDiasecType').textContent = 'דיאסק';
    document.getElementById('labelAddons').textContent = 'תוספות';
    document.getElementById('labelQuantity').textContent = 'כמות';
    document.getElementById('summaryTitle').textContent = 'סיכום';
    document.getElementById('submitOrder').textContent = 'צור קשר';
    translateOptionsToHebrew();
    translateDynamicContentToHebrew(); // Ensure dynamic content is translated
    updateSummary(); // Ensure summary is updated after translation
}


function translateOptionsToHebrew() {
    const productType = document.getElementById('productType');
    const paperType = document.getElementById('paperType');
    const frameType = document.getElementById('frameType');
    const mountType = document.getElementById('mountType');
    
    productType.innerHTML = `
        <option value="" disabled selected>סוג מוצר</option>
        <option value="Print Only">הדפסה בלבד</option>
        <option value="Print + Mount">הדפסה + הדבקה</option>
        <option value="Print + Frame">הדפסה + מסגור</option>
        <option value="Frame Only">מסגור בלבד</option>
    `;

    paperType.innerHTML = `
        <option value="" disabled selected>סוג נייר</option>
        <option value="Fine Art Paper">נייר פיין ארט</option>
        <option value="Laminated Print">הדפסה עם למינציה</option>
        <option value="Fine Art Cotton Paper">נייר פיין ארט 100% כותנה</option>
    `;

    frameType.innerHTML = `
        <option value="" disabled selected>סוג מסגור</option>
        <option value="Box Frame">מסגור קופסה</option>
        <option value="Floating Frame">מסגור צף</option>
        <option value="Aluminium Frame">מסגור אלומיניום</option>
    `;

    mountType.innerHTML = `
        <option value="" disabled selected>סוג הדבקה</option>
    `;

    populatePrintSizes();
    populateMountTypes();
}

function translateToEnglish() {
    document.querySelector('h2').textContent = 'The Pricing Calculator';
    document.getElementById('labelProductType').textContent = 'Product';
    document.getElementById('labelPaperType').textContent = 'Paper';
    document.getElementById('labelPrintSize').textContent = 'Size';
    document.getElementById('labelFrameType').textContent = 'Frame';
    document.getElementById('labelMountType').textContent = ' Mount';
    document.getElementById('labelDiasecType').textContent = 'Diasec';
    document.getElementById('labelAddons').textContent = 'Add-ons:';
    document.getElementById('labelQuantity').textContent = 'Quantity';
    document.getElementById('summaryTitle').textContent = 'Summary';
    document.getElementById('submitOrder').textContent = 'Contact Us';
    translateOptionsToEnglish();
    translateDynamicContentToEnglish(); // Ensure dynamic content is translated
    updateSummary(); // Ensure summary is updated after translation
}



function translateOptionsToEnglish() {
    const productType = document.getElementById('productType');
    const paperType = document.getElementById('paperType');
    const frameType = document.getElementById('frameType');
    const mountType = document.getElementById('mountType');
    
    productType.innerHTML = `
        <option value="" disabled selected>Product Type</option>
        <option value="Print Only">Print Only</option>
        <option value="Print + Mount">Print + Mount</option>
        <option value="Print + Frame">Print + Frame</option>
        <option value="Frame Only">Frame Only</option>
    `;

    paperType.innerHTML = `
        <option value="" disabled selected>Paper Type</option>
        <option value="Fine Art Paper">Fine Art Paper</option>
        <option value="Laminated Print">Laminated Print</option>
        <option value="Fine Art Cotton Paper">Fine Art Cotton Paper</option>
    `;

    frameType.innerHTML = `
        <option value="" disabled selected>Frame Type</option>
        <option value="Box Frame">Box Frame</option>
        <option value="Floating Frame">Floating Frame</option>
        <option value="Aluminium Frame">Aluminium Frame</option>
    `;

    mountType.innerHTML = `
        <option value="" disabled selected>Mounting Type</option>
    `;

    populatePrintSizes();
    populateMountTypes();
}

function translateDynamicContentToHebrew() {
    document.querySelectorAll('#frameDetails label, #addonOptions label').forEach(label => {
        const originalText = label.textContent.split(' - ')[0].trim();
        label.innerHTML = label.innerHTML.replace(originalText, translations[originalText] || originalText);
    });
}

function translateDynamicContentToEnglish() {
    document.querySelectorAll('#frameDetails label, #addonOptions label').forEach(label => {
        const originalText = label.textContent.split(' - ')[0].trim();
        const translationKey = Object.keys(translations).find(key => translations[key] === originalText);
        if (translationKey) {
            label.innerHTML = label.innerHTML.replace(originalText, translationKey);
        }
    });
}

function interpolate(x, x0, y0, x1, y1) {
    return y0 + (y1 - y0) * ((x - x0) / (x1 - x0));
}

function getInterpolatedPrice(size, prices, customSize) {
    const sizes = Object.keys(prices).map(s => {
        const [w, h] = s.split('x').map(Number);
        return { size: s, width: w, height: h, price: prices[s] };
    }).sort((a, b) => a.width * a.height - b.width * b.height);

    for (let i = 0; i < sizes.length - 1; i++) {
        const { width: w0, height: h0, price: p0 } = sizes[i];
        const { width: w1, height: h1, price: p1 } = sizes[i + 1];

        const area0 = w0 * h0;
        const area1 = w1 * h1;
        const customArea = customSize.width * customSize.height;

        if (customArea >= area0 && customArea <= area1) {
            return Math.round(interpolate(customArea, area0, p0, area1, p1));
        }
    }

    // If custom size is larger than all predefined sizes, extrapolate from the largest two sizes
    const { width: w0, height: h0, price: p0 } = sizes[sizes.length - 2];
    const { width: w1, height: h1, price: p1 } = sizes[sizes.length - 1];
    const area0 = w0 * h0;
    const area1 = w1 * h1;
    const customArea = customSize.width * customSize.height;

    return Math.round(interpolate(customArea, area0, p0, area1, p1));
}



function getInterpolatedPriceByType(prices, customSize) {
    const sizes = Object.keys(prices).map(s => {
        const [w, h] = s.split('x').map(Number);
        return { size: s, width: w, height: h, prices: prices[s] };
    }).sort((a, b) => a.width * a.height - b.width * b.height);

    if (sizes.length < 2) {
        console.warn("Not enough sizes to perform interpolation.");
        return null;
    }

    const customArea = customSize.width * customSize.height;
    const types = Object.keys(sizes[0].prices);

    for (let i = 0; i < sizes.length - 1; i++) {
        const { width: w0, height: h0, prices: p0 } = sizes[i];
        const { width: w1, height: h1, prices: p1 } = sizes[i + 1];

        const area0 = w0 * h0;
        const area1 = w1 * h1;

        if (customArea >= area0 && customArea <= area1) {
            const result = {};
            types.forEach(type => {
                result[type] = Math.round(interpolate(customArea, area0, p0[type], area1, p1[type]));
            });
            return result;
        }
    }

    // If custom size is larger than all predefined sizes, extrapolate from the largest two sizes
    const { width: w0, height: h0, prices: p0 } = sizes[sizes.length - 2];
    const { width: w1, height: h1, prices: p1 } = sizes[sizes.length - 1];
    const area0 = w0 * h0;
    const area1 = w1 * h1;

    const result = {};
    types.forEach(type => {
        result[type] = Math.round(interpolate(customArea, area0, p0[type], area1, p1[type]));
    });
    return result;
}


function addCustomSizeToTables(customWidth, customHeight) {
    const customSizeKey = `${customWidth}x${customHeight}`;
    const customSize = { width: customWidth, height: customHeight };

    // Simple price tables
    Object.keys(priceTable).forEach(paperType => {
        const interpolatedPrice = getInterpolatedPrice(paperType, priceTable[paperType], customSize);
        if (interpolatedPrice !== null) {
            priceTable[paperType][customSizeKey] = interpolatedPrice;
        }
    });

    // Update dibondPriceTable and dibondNoBackFramePriceTable
    [dibondPriceTable, dibondNoBackFramePriceTable].forEach(table => {
        const interpolatedPrice = getInterpolatedPrice(customSizeKey, table, customSize);
        if (interpolatedPrice !== null) {
            table[customSizeKey] = interpolatedPrice;
        }
    });

    // Update addonPriceTable
    Object.keys(addonPriceTable).forEach(type => {
        const interpolatedPrice = getInterpolatedPrice(customSizeKey, addonPriceTable[type], customSize);
        if (interpolatedPrice !== null) {
            addonPriceTable[type][customSizeKey] = interpolatedPrice;
        }
    });

    // Complex price tables
    const complexTables = [diasecPriceTable, kapaPriceTable, boxFramePriceTable, floatingFramePriceTable, aluminiumFramePriceTable, noGlassFloatingFramesPriceTable, lightBoxPriceTable, stretcherFramePriceTable, boxFrameOriginalsPriceTable];

    complexTables.forEach(table => {
        const interpolatedPrices = getInterpolatedPriceByType(table, customSize);
        if (interpolatedPrices !== null) {
            table[customSizeKey] = interpolatedPrices;
        }
    });

    // Debugging: Print the updated tables
    console.log("Updated priceTable:", priceTable);
    console.log("Updated dibondPriceTable:", dibondPriceTable);
    console.log("Updated dibondNoBackFramePriceTable:", dibondNoBackFramePriceTable);
    console.log("Updated addonPriceTable:", addonPriceTable);
    complexTables.forEach((table, index) => {
        console.log(`Updated complexTable ${index + 1}:`, table);
    });
}




document.getElementById('customSizeButton').addEventListener('click', () => {
    const customWidth = parseFloat(document.getElementById('customWidth').value);
    const customHeight = parseFloat(document.getElementById('customHeight').value);
    const printSizeSelect = document.getElementById('printSize');
    const minSize = 10;
    const minArea = 600;

    if (customWidth >= minSize && customHeight >= minSize && (customWidth * customHeight) >= minArea) {
        addCustomSizeToTables(customWidth, customHeight);
        populatePrintSizes();  // Ensure the custom size is added to the dropdown
        printSizeSelect.value = `${customWidth}x${customHeight}`;  // Set the custom size value
        printSizeSelect.dispatchEvent(new Event('change'));  // Trigger change event to update the UI
        updateSummary();
    } else {
        alert(`Please ensure the dimensions are at least ${minSize}x${minSize} and the area is at least ${minArea}.`);
    }
});

function showOptions() {
    const productType = document.getElementById('productType').value;
    const paperTypeOptions = document.getElementById('paperTypeOptions');
    const printSizeOptions = document.getElementById('printSizeOptions');
    const mountOptions = document.getElementById('mountOptions');
    const frameOptions = document.getElementById('frameOptions');
    const quantityOptions = document.getElementById('quantityOptions');
    const frameDetails = document.getElementById('frameDetails');
    const addonOptions = document.getElementById('addonOptions');
    const diasecTypeOptions = document.getElementById('diasecTypeOptions');
    const paperTypeWrapper = document.getElementById('paperType').parentElement;

    // Hide all options initially
    paperTypeOptions.classList.add('hidden');
    printSizeOptions.classList.add('hidden');
    mountOptions.classList.add('hidden');
    frameOptions.classList.add('hidden');
    quantityOptions.classList.add('hidden');
    frameDetails.classList.add('hidden');
    addonOptions.classList.add('hidden');
    diasecTypeOptions.classList.add('hidden');
    paperTypeWrapper.classList.remove('hidden-no-space'); // Reset paper type visibility

    // Show relevant options based on the selected product type
    if (productType === 'Print Only') {
        paperTypeOptions.classList.remove('hidden');
    } else if (productType === 'Print + Mount') {
        paperTypeOptions.classList.remove('hidden');
    } else if (productType === 'Print + Frame') {
        paperTypeOptions.classList.remove('hidden');
    } else if (productType === 'Frame Only') {
        printSizeOptions.classList.remove('hidden');
        populatePrintSizes();
    }

    updateSummary(); // Ensure summary is updated after product type selection
}








function populatePrintSizes() {
    const productType = document.getElementById('productType').value;
    const paperType = document.getElementById('paperType').value;
    const printSizeSelect = document.getElementById('printSize');
    const lang = document.documentElement.lang;

    printSizeSelect.innerHTML = `<option value="" disabled selected>${lang === 'he' ? 'בחר גודל הדפסה' : 'Select Print Size'}</option>`;

    if (productType === 'Frame Only') {
        for (const size in dibondNoBackFramePriceTable) {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = `${size}`;
            printSizeSelect.appendChild(option);
        }
    } else {
        for (const [size, price] of Object.entries(priceTable[paperType])) {
            const option = document.createElement('option');
            option.value = size;
            if (lang === 'he') {
                option.textContent = `${price} ₪ - ${size}`;
            } else {
                option.textContent = `${size} - ${price} NIS`;
            }
            printSizeSelect.appendChild(option);
        }
    }

    printSizeSelect.innerHTML += `<option value="${lang === 'he' ? 'מותאם אישית' : 'Custom'}">${lang === 'he' ? 'בחר גודל מותאם אישית' : 'Select a Custom Size'}</option>`;
    document.getElementById('printSizeOptions').classList.remove('hidden');
    updateSummary();
}






function populateMountTypes() {
    const productType = document.getElementById('productType').value;
    const frameType = document.getElementById('frameType').value;
    const printSize = document.getElementById('printSize').value;
    const mountTypeSelect = document.getElementById('mountType');
    const diasecTypeOptions = document.getElementById('diasecTypeOptions');
    const addonOptions = document.getElementById('addonOptions');
    const quantityOptions = document.getElementById('quantityOptions');

    mountTypeSelect.innerHTML = `<option value="" disabled selected>${document.documentElement.lang === 'he' ? 'בחור סוג הדבקה' : 'Select Mounting Type'}</option>`;

    if (productType === 'Print + Frame' && (frameType === 'Box Frame' || frameType === 'Floating Frame' || frameType === 'Aluminium Frame')) {
        const kapaPrices = kapaPriceTable[printSize];
        if (kapaPrices) {
            mountTypeSelect.innerHTML += `<option value="KAPA White (Line)">${document.documentElement.lang === 'he' ? translations['KAPA White (Line)'] : 'KAPA White (Line)'} - ${kapaPrices['KAPA White (Line)']} ${document.documentElement.lang === 'he' ? '₪' : 'NIS'}</option>`;
            mountTypeSelect.innerHTML += `<option value="KAPA Grey (Fix)">${document.documentElement.lang === 'he' ? translations['KAPA Grey (Fix)'] : 'KAPA Grey (Fix)'} - ${kapaPrices['KAPA Grey (Fix)']} ${document.documentElement.lang === 'he' ? '₪' : 'NIS'}</option>`;
        }
        const dibondPrice = dibondNoBackFramePriceTable[printSize];
        if (dibondPrice) {
            mountTypeSelect.innerHTML += `<option value="Dibond">${document.documentElement.lang === 'he' ? translations['Dibond'] : 'Dibond'} - ${dibondPrice} ${document.documentElement.lang === 'he' ? '₪' : 'NIS'}</option>`;
        }
        if (frameType === 'Floating Frame') {
            mountTypeSelect.innerHTML += `<option value="Diasec">${document.documentElement.lang === 'he' ? translations['Diasec'] : 'Diasec'}</option>`;
        }
    } else if (productType === 'Print + Mount') {
        const dibondPrice = dibondPriceTable[printSize];
        if (dibondPrice) {
            mountTypeSelect.innerHTML += `<option value="Dibond">${document.documentElement.lang === 'he' ? translations['Dibond'] : 'Dibond'} - ${dibondPrice} ${document.documentElement.lang === 'he' ? '₪' : 'NIS'}</option>`;
        }
        mountTypeSelect.innerHTML += `<option value="Diasec">${document.documentElement.lang === 'he' ? translations['Diasec'] : 'Diasec'}</option>`;
    }

    mountTypeSelect.classList.remove('hidden');
    diasecTypeOptions.classList.add('hidden');
    addonOptions.classList.add('hidden'); // Ensure add-ons are hidden initially
    

    mountTypeSelect.addEventListener('change', () => {
        if (productType === 'Print + Frame' && frameType !== 'Floating Frame') {
            addonOptions.classList.remove('hidden');
        }
        quantityOptions.classList.remove('hidden');
        showDiasecOptions();
        updateSummary();
    });

    updateSummary();
}



function showDiasecOptions() {
    const productType = document.getElementById('productType').value;
    const mountType = document.getElementById('mountType').value;
    const diasecTypeOptions = document.getElementById('diasecTypeOptions');
    const printSize = document.getElementById('printSize').value;
    const diasecTypeSelect = document.getElementById('diasecType');
    const paperTypeWrapper = document.getElementById('paperTypeOptions');
    const addonOptions = document.getElementById('addonOptions');
    const frameType = document.getElementById('frameType').value;

    if (mountType === 'Diasec') {
        addonOptions.classList.add('hidden'); // Ensure add-ons are hidden for Diasec

        diasecTypeSelect.innerHTML = `<option value="" disabled selected>${document.documentElement.lang === 'he' ? 'בחר סוג דיאסק (פרספקס קידמי)' : 'Select Diasec Type (Acrylic Facemount)'}</option>`;

        if (printSize && diasecPriceTable[printSize]) {
            for (const [type, price] of Object.entries(diasecPriceTable[printSize])) {
                diasecTypeSelect.innerHTML += `<option value="${type}">${document.documentElement.lang === 'he' ? translations[type] : type} - ${price} ${document.documentElement.lang === 'he' ? '₪' : 'NIS'}</option>`;
            }
        }
        
        diasecTypeOptions.classList.remove('hidden');
        paperTypeWrapper.classList.add('hidden-no-space'); // Hide paper type with no spacing

        Array.from(document.getElementById('printSize').options).forEach(option => {
            if (option.value) {
                option.textContent = option.value;
            }
        });
    } else {
        diasecTypeOptions.classList.add('hidden');
        paperTypeWrapper.classList.remove('hidden-no-space'); // Show paper type with spacing

        const paperType = document.getElementById('paperType').value;
        if (paperType && priceTable[paperType]) {
            for (const [size, price] of Object.entries(priceTable[paperType])) {
                const option = Array.from(document.getElementById('printSize').options).find(opt => opt.value === size);
                if (option) {
                    option.textContent = document.documentElement.lang === 'he' ? `${size} - ₪${price}` : `${size} - ${price} NIS`;
                }
            }
        }
    }

    if (frameType === 'Floating Frame' || productType === 'print + mount') {
        addonOptions.classList.add('hidden'); // Hide add-ons for Floating Frame
    }

    updateSummary();
}






function populateFrameType() {
    const productType = document.getElementById('productType').value;
    const frameTypeSelect = document.getElementById('frameType');
    const lang = document.documentElement.lang;

    frameTypeSelect.innerHTML = `
        <option value="" disabled selected>${lang === 'he' ? 'סוג מסגור' : 'Frame Type'}</option>
    `;

    if (productType === 'Frame Only') {
        frameTypeSelect.innerHTML += `
            <option value="Floating Frame For Paintings">${lang === 'he' ? translations['Floating Frame For Paintings'] : 'Floating Frame For Paintings'}</option>
            <option value="Light Box(Includes Printing)">${lang === 'he' ? translations['Light Box(Includes Printing)'] : 'Light Box(Includes Printing)'}</option>
            <option value="Stretcher Frame">${lang === 'he' ? translations['Stretcher Frame'] : 'Stretcher Frame'}</option>
            <option value="Box Frame for Originals">${lang === 'he' ? translations['Box Frame for Originals'] : 'Box Frame for Originals'}</option>
        `;
    } else if (productType === 'Print + Frame') {
        frameTypeSelect.innerHTML += `
            <option value="Box Frame">${lang === 'he' ? translations['Box Frame'] : 'Box Frame'}</option>
            <option value="Floating Frame">${lang === 'he' ? translations['Floating Frame'] : 'Floating Frame'}</option>
            <option value="Aluminium Frame">${lang === 'he' ? translations['Aluminium Frame'] : 'Aluminium Frame'}</option>
        `;
    }

    frameTypeSelect.addEventListener('change', () => {
        resetOptions('frameType');
        showFrameOptions();
        updateSummary();
    });
}






function showFrameOptions() {
    const frameType = document.getElementById('frameType').value;
    const frameDetails = document.getElementById('frameDetails');
    const printSize = document.getElementById('printSize').value;
    const mountOptions = document.getElementById('mountOptions');
    const addonOptions = document.getElementById('addonOptions');
    const quantityOptions = document.getElementById('quantityOptions');
    const lang = document.documentElement.lang;

    frameDetails.classList.remove('hidden');
    mountOptions.classList.add('hidden');
    addonOptions.classList.add('hidden');
    quantityOptions.classList.add('hidden');

    // Clear previous options
    frameDetails.innerHTML = '';
    addonOptions.innerHTML = '';

    let options;
    if (frameType === 'Box Frame') {
        options = boxFramePriceTable[printSize];
    } else if (frameType === 'Floating Frame') {
        options = floatingFramePriceTable[printSize];
    } else if (frameType === 'Aluminium Frame') {
        options = aluminiumFramePriceTable[printSize];
    } else if (frameType === 'Floating Frame For Paintings') {
        options = noGlassFloatingFramesPriceTable[printSize];
    } else if (frameType === 'Light Box(Includes Printing)') {
        options = lightBoxPriceTable[printSize];
    } else if (frameType === 'Stretcher Frame') {
        options = stretcherFramePriceTable[printSize];
    } else if (frameType === 'Box Frame for Originals') {
        options = boxFrameOriginalsPriceTable[printSize];
    }

    if (options) {
        for (const [option, price] of Object.entries(options)) {
            frameDetails.innerHTML += `
                <div class="radio-group">
                    <input type="radio" id="frame${option.replace(/\s+/g, '')}" name="frameOption" value="${option}" data-price="${price}">
                    <label for="frame${option.replace(/\s+/g, '')}">${lang === 'he' ? translations[option] : option} <span style="color: grey;">- ${price} ${lang === 'he' ? '₪' : 'NIS'}</span></label>
                </div>
            `;
        }
    }
    var antiReflectiveGlassPrice;
    var passepartoutPrice;
    if(frameType === 'Box Frame'){
        antiReflectiveGlassPrice = addonPriceTable['Anti-Reflective Glass'][printSize];
        passepartoutPrice = addonPriceTable['Passepartout Box'][printSize];
    }else if(frameType === 'Aluminium Frame'){
        antiReflectiveGlassPrice = addonPriceTable['Anti-Reflective Glass'][printSize];
        passepartoutPrice = addonPriceTable['Passepartout Aluminum'][printSize];
    }
    
    addonOptions.innerHTML += `
        <div class="checkbox-group">
            <input type="checkbox" id="addonAntiReflectiveGlass" name="addonOption" value="Anti-Reflective Glass" data-price="${antiReflectiveGlassPrice}">
            <label for="addonAntiReflectiveGlass">${lang === 'he' ? translations['Anti-Reflective Glass'] : 'Anti-Reflective Glass'} <span style="color: grey;">- ${antiReflectiveGlassPrice} ${lang === 'he' ? '₪' : 'NIS'}</span></label>
        </div>
        <div class="checkbox-group">
            <input type="checkbox" id="addonPassepartout" name="addonOption" value="Passepartout" data-price="${passepartoutPrice}">
            <label for="addonPassepartout">${lang === 'he' ? translations['Acid Free Passepartout'] : 'Acid-Free Passepartout'} <span style="color: grey;">- ${passepartoutPrice} ${lang === 'he' ? '₪' : 'NIS'}</span></label>
        </div>
    `;

    // Add event listeners to dynamically added radio buttons
    document.querySelectorAll('#frameDetails input[type="radio"]').forEach(option => {
        option.addEventListener('change', () => {
            if (frameType !== 'Floating Frame For Paintings' && frameType !== 'Light Box(Includes Printing)'  && frameType !== 'Stretcher Frame' && frameType !== 'Box Frame for Originals') {
                mountOptions.classList.remove('hidden');
                populateMountTypes();  // Ensure mount types are populated based on selected frame type
            } else {
                quantityOptions.classList.remove('hidden');
            }
            updateSummary();
        });
    });

    // Add event listeners to dynamically added checkboxes
    document.querySelectorAll('#addonOptions input[type="checkbox"]').forEach(option => {
        option.addEventListener('change', updateSummary);
    });

    updateSummary();
}








function updateSummary() {
    const elements = [
        { id: 'productType', label: { en: 'Product Type', he: 'סוג מוצר' } },
        { id: 'paperType', label: { en: 'Paper Type', he: 'סוג נייר' } },
        { id: 'printSize', label: { en: 'Print Size', he: 'גודל הדפסה' } },
        { id: 'mountType', label: { en: 'Mounting Type', he: 'סוג הדבקה' } },
        { id: 'diasecType', label: { en: 'Diasec Type (Acrylic Facemount)', he: 'סוג דיאסק (פרספקס קידמי)' } },
        { id: 'frameType', label: { en: 'Frame Type', he: 'סוג מסגור' } },
    ];

    const summaryText = document.getElementById('summaryText');
    summaryText.innerHTML = ''; // Clear previous content

    let totalCost = 0;
    let lang = document.documentElement.lang;
    let productType = document.getElementById('productType').value;
    let paperType = document.getElementById('paperType').value;
    let printSize = document.getElementById('printSize').value;
    let mountType = document.getElementById('mountType').value;
    let diasecType = document.getElementById('diasecType').value;
    let frameType = document.getElementById('frameType').value;
    let quantity = parseInt(document.getElementById('quantity').value) || 1;

    function createSummaryLine(label, value, price) {
        const line = document.createElement('div');
        line.className = 'summary-line';

        const labelSpan = document.createElement('span');
        labelSpan.className = 'summary-label';
        labelSpan.innerHTML = `<strong>${label}</strong>`;

        const valueSpan = document.createElement('span');
        valueSpan.className = 'summary-value';
        valueSpan.innerHTML = `<strong>${value}</strong>`;

        const priceSpan = document.createElement('span');
        priceSpan.className = 'summary-price';
        priceSpan.innerHTML = price ? `<strong>${price * quantity} ${lang === 'he' ? '₪' : 'NIS'}</strong>` : '';

        line.appendChild(labelSpan);
        line.appendChild(valueSpan);
        if (price) {
            line.appendChild(priceSpan);
        }

        summaryText.appendChild(line);
    }

    elements.forEach(element => {
        const value = document.getElementById(element.id).value;
        if (value) {
            let price = '';
            if (element.id === 'printSize' && paperType && (!mountType || mountType !== 'Diasec')) {
                price = priceTable[paperType][printSize];
            } else if (element.id === 'mountType' && mountType === 'Dibond' && printSize && productType !== 'Print + Frame') {
                price = dibondPriceTable[printSize];
            } else if (element.id === 'mountType' && mountType === 'Dibond' && printSize && productType === 'Print + Frame') {
                price = dibondNoBackFramePriceTable[printSize];
            } else if (element.id === 'mountType' && mountType.startsWith('KAPA') && printSize) {
                price = kapaPriceTable[printSize][mountType];
            } else if (element.id === 'diasecType' && diasecType && printSize) {
                price = diasecPriceTable[printSize][diasecType];
            } else if (element.id === 'frameType') {
                document.querySelectorAll('#frameDetails input[type="radio"]:checked').forEach(option => {
                    price = parseInt(option.dataset.price);
                });
            }

            // Append "(Includes Alu. Back Frame)" for Print + Mount in the summary
            if (productType === 'Print + Mount' && (mountType === 'Dibond' || mountType === 'Diasec') && element.id === 'mountType') {
                const translatedValue = lang === 'he' ? translations[value] || value : value;
                const valueWithBackFrame = `${translatedValue} ${lang === 'he' ? '(כולל מסגרת אלומיניום אחורית)' : '(Includes Alu. Back Frame)'}`;
                createSummaryLine(lang === 'he' ? element.label.he : element.label.en, valueWithBackFrame, price);
            } else if (!(mountType === 'Diasec' && element.id === 'paperType')) {
                const translatedValue = lang === 'he' ? translations[value] || value : value;
                createSummaryLine(lang === 'he' ? element.label.he : element.label.en, translatedValue, price);
            }
            
            totalCost += (price || 0) * quantity;
        }
    });

    // Calculate total cost dynamically
    if (productType === 'Print Only' && paperType && printSize) {
        totalCost = (priceTable[paperType][printSize] || 0) * quantity;
    } else if (productType === 'Print + Mount') {
        if (mountType === 'Dibond' && printSize) {
            totalCost = ((dibondPriceTable[printSize] || 0) + (priceTable[paperType][printSize] || 0)) * quantity;
        } else if (mountType === 'Diasec' && diasecType && printSize) {
            totalCost = (diasecPriceTable[printSize][diasecType] || 0) * quantity;
        } else if (mountType.startsWith('KAPA') && printSize) {
            totalCost = ((kapaPriceTable[printSize][mountType] || 0) + (priceTable[paperType][printSize] || 0)) * quantity;
        }
    } else if (productType === 'Print + Frame' && paperType && printSize) {
        let frameCost = 0;
        document.querySelectorAll('#frameDetails input[type="radio"]:checked').forEach(option => {
            frameCost += parseInt(option.dataset.price) || 0;
        });

        totalCost = (priceTable[paperType][printSize] || 0) * quantity + frameCost * quantity;
        if (mountType === 'Diasec' && !diasecType) {
            totalCost -= (priceTable[paperType][printSize] || 0) * quantity;
        }
        if (mountType === 'Diasec' && diasecType) {
            totalCost += (diasecPriceTable[printSize][diasecType] || 0) * quantity - (priceTable[paperType][printSize] || 0) * quantity;
        } else if (mountType === 'Dibond') {
            totalCost += (dibondNoBackFramePriceTable[printSize] || 0) * quantity;
        } else if (mountType.startsWith('KAPA')) {
            totalCost += (kapaPriceTable[printSize][mountType] || 0) * quantity;
        }
    } else if (productType === 'Frame Only' && printSize) {
        let frameCost = 0;
        document.querySelectorAll('#frameDetails input[type="radio"]:checked').forEach(option => {
            frameCost += parseInt(option.dataset.price) || 0;
        });
        totalCost = frameCost * quantity;
    }

    // Handle upgrades separately to add them with the same structure but without price in value text
    const upgrades = document.querySelectorAll('#addonOptions input[type="checkbox"]:checked');
    upgrades.forEach(upgrade => {
        const value = upgrade.nextElementSibling.textContent.split(' - ')[0]; // Get only the text part without price
        const price = parseInt(upgrade.dataset.price) || 0;
        createSummaryLine(lang === 'he' ? 'שדרוג' : 'Upgrade', value, price);
        totalCost += price * quantity;
    });

    // Add quantity to summary only if quantityOptions is visible
    if (!document.getElementById('quantityOptions').classList.contains('hidden')) {
        createSummaryLine(lang === 'he' ? 'כמות' : 'Quantity', quantity, '');
    }

    // Update existing total cost element
    document.getElementById('totalCost').textContent = `${totalCost} ${lang === 'he' ? '₪' : 'NIS'}`;
}
// Call the function to update the summary initially
updateSummary();






// Initial setup
document.getElementById('productType').selectedIndex = -1;
document.getElementById('paperType').selectedIndex = -1;
document.getElementById('printSize').selectedIndex = -1;
document.getElementById('mountType').selectedIndex = -1;
document.getElementById('diasecType').selectedIndex = -1;
document.getElementById('frameType').selectedIndex = -1;
document.getElementById('quantity').value = 1;

// Call the function to update the summary initially
updateSummary();



document.getElementById('submitOrder').addEventListener('click', () => {
    
});

document.getElementById('submitOrder').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById('popupForm').style.display = 'block';
});

// Get the <span> element that closes the popup
var closeBtn = document.querySelector('.close');

// When the user clicks on <span> (x), close the popup
closeBtn.onclick = function() {
    document.getElementById('popupForm').style.display = 'none';
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == document.getElementById('popupForm')) {
        document.getElementById('popupForm').style.display = 'none';
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const popupFormContent = document.querySelector('.popup-content form');
    const confirmationPopup = document.getElementById('confirmationPopup');
    const closeConfirmationBtn = document.querySelector('.close-confirmation');
    const confirmationTitle = document.getElementById('confirmationTitle');
    const confirmationMessage = document.getElementById('confirmationMessage');
    
    // Clear existing content if any
    popupFormContent.innerHTML = '';

    // Create and append new form elements with title
    const formElements = `
        <h2>${document.documentElement.lang === 'he' ? 'צור קשר להצעת מחיר' : 'Contact Us For a Quote'}</h2>
        <input type="text" id="firstName" name="firstName" placeholder="${document.documentElement.lang === 'he' ? 'שם פרטי*' : 'First Name*'}" required>
        <input type="text" id="lastName" name="lastName" placeholder="${document.documentElement.lang === 'he' ? 'שם משפחה*' : 'Last Name*'}" required>
        <input type="number" id="phoneNumber" name="phoneNumber" placeholder="${document.documentElement.lang === 'he' ? 'מספר טלפון*' : 'Phone Number*'}" required>
        <input type="email" id="email" name="email" placeholder="${document.documentElement.lang === 'he' ? 'אימייל*' : 'Email*'}" required>
        <textarea type="text" id="additionalInfo" name="additionalInfo" placeholder="${document.documentElement.lang === 'he' ? 'משהו נוסף שצריך שנדע?' : 'Anything else we should know?'}"></textarea>
        <button id="popup-submit" type="submit">${document.documentElement.lang === 'he' ? 'לשלוח' : 'Send'}</button>
        <div id="confirmationMessage" style="display:none;">${document.documentElement.lang === 'he' ? 'נשלח!' : 'Sent!'}</div>
    `;

    popupFormContent.innerHTML = formElements;
    

    // Handle form submission
    popupFormContent.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
    
        // Get form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            phoneNumber: document.getElementById('phoneNumber').value,
            email: document.getElementById('email').value,
            additionalInfo: document.getElementById('additionalInfo').value
        };
    
        const productType = document.getElementById('productType').value;
        const paperType = document.getElementById('paperType').value;
        const printSize = document.getElementById('printSize').value;
        const quantity = parseInt(document.getElementById('quantity').value) || 1;
        const totalCost = parseFloat(document.getElementById('totalCost').textContent.replace(/[^\d.-]/g, ''));
        const mountType = document.getElementById('mountType').value;
        const diasecType = document.getElementById('diasecType').value;
        const frameType = document.getElementById('frameType').value;
        const addons = Array.from(document.querySelectorAll('#addonOptions input[type="checkbox"]:checked')).map(cb => cb.value);
    
        const personId = 3529854; // Replace with the correct person ID
        const status = 'New'; // Ensure this matches one of the predefined status labels
    
        // Constructing the column values
        const columnValues = {
            label__1: { label: productType }, // Product Type
            status: { label: status }, // Lead status
            person: { personsAndTeams: [{ id: personId, kind: "person" }] }, // Person
            numbers__1: totalCost, // Estimated Value
            numbers6__1: quantity, // Estimated QTY
            date4: { date: new Date().toISOString().split('T')[0] }, // Lead Creation Date
            email__1: { email: formData.email, text: formData.email }, // Email
            phone__1: formData.phoneNumber // Phone
        };
    
        // Generate summary
        let summary = `Original Lead Summary:\n`;
        summary += "\n";
        if (formData.firstName) summary += `-First Name: ${formData.firstName}\n`;
        if (formData.lastName) summary += `-Last Name: ${formData.lastName}\n`;
        if (formData.phoneNumber) summary += `-Phone Number: ${formData.phoneNumber}\n`;
        if (formData.email) summary += `-Email: ${formData.email}\n`;
        summary += "\n";
        if (productType) summary += `-Product Type: ${productType}\n`;
        if (paperType) summary += `-Paper Type: ${paperType}\n`;
        if (printSize) summary += `-Print Size: ${printSize}\n`;
        if (mountType) summary += `-Mounting Type: ${mountType}\n`;
        if (diasecType) summary += `-Diasec Type (Acrylic Facemount): ${diasecType}\n`;
        if (frameType) summary += `-Frame Type: ${frameType}\n`;
        if (addons.length > 0) summary += `-Add-ons: ${addons.join(', ')}\n`;
        summary += "\n";
        if (quantity) summary += `-Quantity: ${quantity}\n`;
        if (totalCost) summary += `-Estimated Lead Value: ${totalCost} NIS\n`;
        summary += "\n";
        if (formData.additionalInfo) summary += `-Additional Info: ${formData.additionalInfo}\n`;
       
        // Construct the GraphQL query for creating the item
        const query = `
            mutation {
                create_item (board_id: 6996556596, item_name: "${formData.firstName} ${formData.lastName}", column_values: "${JSON.stringify(columnValues).replace(/"/g, '\\"')}") {
                    id
                }
            }
        `;
    
        // Define the Monday API endpoint and your API key
        const mondayApiUrl = 'https://api.monday.com/v2';
        const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM4MTEzNjM0OSwiYWFpIjoxMSwidWlkIjo2MTI1MzU0MCwiaWFkIjoiMjAyNC0wNy0wN1QwNzowNjoyNi4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTU5NjkyNCwicmduIjoidXNlMSJ9.tSTtRMuZt05ZCBDTVg5H289Esi7JtUZe1IxJXbdgMrM'; // Replace with your actual Monday API key
    
        // Send the request to create the item
        fetch(mondayApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': apiKey
            },
            body: JSON.stringify({ query })
        })
        .then(response => response.json())
        .then(data => {
            const itemId = data.data.create_item.id;
    
            // Now add the update to the created item
            const updateQuery = `
                mutation {
                    create_update (item_id: ${itemId}, body: "${summary.replace(/\n/g, '\\n').replace(/"/g, '\\"')}") {
                        id
                    }
                }
            `;
    
            return fetch(mondayApiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': apiKey
                },
                body: JSON.stringify({ query: updateQuery })
            });
        })
        .then(response => response.json())
        .then(data => {
            console.log('Update added:', data);
            popupFormContent.innerHTML = '';
            popupFormContent.innerHTML = formElements;
            document.getElementById('popupForm').style.display = 'none';
             // Populate the confirmation popup content dynamically
             confirmationTitle.textContent = document.documentElement.lang === 'he' ? 'תודה!' : 'Thank you!';
             confirmationMessage.textContent = document.documentElement.lang === 'he' ? 'הבקשה נקלטה בהצלחה. ניצור איתך קשר ונזמין אותך אלינו לראות ולאשר טסט לפני הדפסה סופית.' : 'The request was successfully received. We will contact you and invite you to see and approve a test before final printing.';
             // Show confirmation popup on successful submission
             confirmationPopup.style.display = 'block';
        })
        .catch(error => {
            console.error('Error submitting order:', error);
            alert("error please try again later");
        });
        // When the user clicks on <span> (x), close the confirmation popup
        closeConfirmationBtn.onclick = function() {
        confirmationPopup.style.display = 'none';
        }
    
        // When the user clicks anywhere outside of the confirmation popup, close it
        window.onclick = function(event) {
        if (event.target == confirmationPopup) {
            confirmationPopup.style.display = 'none';
        }
    }
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const paperTypeWrapper = document.getElementById('paperTypeOptions');
    if (!paperTypeWrapper) {
        console.error('paperTypeWrapper element not found.');
    }
});


