//ЦВЕТА И ГРАДИЕНТЫ
export const colors = { //Помечены как цвета переменных
    brand: {
        violet: '#8657DD',
        green: '#65DC6A',
        orange: '#EC762E',
        turquoise: '#3AC0C0',
        yellow: '#FFB300'
    },
    neutral: {
        darkBlack: '#111',
        lightBlack: '#191919',
        darkGray: '#999',
        mediumGray: '#D9D9D9',
        lightGray: '#F2F2F2',
        champagne: '#FAF9F2',
        white: '#FFF'
    }
}

export const gradient = {
    violetLight: 'linear-gradient(180deg, #8047EB 0%, #2B184F 100%)',
    violetDark: 'linear-gradient(180deg, #121213 0%, #1A102D 100%)',
    gradient20: 'linear-gradient(270deg, #65DC6A33 3.17%, #67D1D133 40.07%, #8047EB33 99.9%)',
    violet: 'linear-gradient(180deg, #8047EB40 0%, #8047EB 64.06%)',
    orange: 'linear-gradient(180deg, #EC762E40 0%, #EC762E 72.65%)',
    green: 'linear-gradient(180deg, #65DC6A40 0%, #65DC6A 71.87%)'
}

export const typographyGradient = {//градиент текста
    G1: 'linear-gradient(90deg, #8657DD 0.11%, #7391DD 53.25%, #67D1D1 99.91%)',
    G2: 'linear-gradient(91deg, #EC762E 0.25%, #B65F8C 49.85%, #8047EB 99.64%)',
    G3: 'linear-gradient(90deg, #65DC6A 0%, #7293A9 52.09%, #8047EB 106.81%)',
    G4: 'linear-gradient(90deg, #3AC0C0 0.15%, #EC762E 105.2%)'
}

export const typographyColor = {//цвета текста
    lightBG: {
        violet: '#8657DD',
        green: '#2FB329',
        orange: '#E55700',
        turquoise: '#17A9A9',
        yellow: '#FFB300'
    },
    darkBG: {
        violet: '#B391F3',
        green: '#65DC6A',
        orange: '#EC762E',
        yellow: '#FFB300',
        turquoise: '#3AC0C0',
        lightGray: '#F2F2F2',
        white: '#FFF'
    }
}

export const backgroundColor = {
    black: '#111',
    lightBlack: '#191919',
    yellow: '#FFB300',
    champagne: '#FAF9F2',
    white: '#FFF',
    violet20: '#8657DD33',
    violet40: '#8657DD66',
    violet5: '#8657DD0D'
}

export const defaultBtnColor = {// в библиотеке он просто именуется как дефолт, но ts не принимает такое название
    violet: '#8657DD',
    yellow: '#FFB300',
    green: '#65DC6A',
    black: '#111',
    white: '#FFF'
}

export const hoverBtnColor = {
    violet: '#A075F0',
    violet20: '#A075F033',
    yellow: '#FFB300',
    orange20: '#FFB30033',
    green: '#ABFCAF',
    green20: '#ABFCAF33',
    darkGray: '#999',
    black: '#111'
}

export const activeBtnColor = {
    violet: '#DFD1FA',
    green: '#81F386',
    mediumGray: '#D9D9D9',
    black: '#111'
}

export const disabledBtnColor = {
    violet: '#5125A3'
}

export const notificationColor = {
    red: '#EC2E2E'
}