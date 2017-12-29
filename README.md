# i18next

Localization can be done easily with `i18next`. This repo demonstrates how to integrate it with your existing JavaScript application. The full documentation can be found [here](https://www.i18next.com/).

## Installation

```bash
# npm
$ npm i i18next

# yarn
$ yarn add i18next
```

## Optional Installation

You can also install `moment.js` and `numeral.js` if you want to perform datetime and currency conversion:

```bash
# npm
$ npm i moment
$ npm i numeral

# yarn
$ yarn add moment
$ yarn add numeral
```

## Output

```
Printing english translations:
==============================
Today is a good day!

Hi, John! Good day!

www.google.com
www.google.my
www.google.id

Sign up now for free
Buy this now
View more jobs

I bought cappucino for MYR 100.00.

There is 1 job for you!
There are 100 jobs for you!

The current date is 29th December 2017

I receive a new message today
I receive a new email today
I receive a new facebook message today


Printing indonesian translations:
================================
Hari ini adalah hari yang baik!

Hi, John! Hari bagus!

www.google.com
www.google.my
www.google.id

Daftar sekarang gratis
Beli ini sekarang
Lihat lebih banyak perkerjaan

Saya membeli cappucino seharga IDR 100.00.

Ada 1 perkerjaan untukmu!
Ada 100 perkerjaan untukmu!

Tanggal sekarang adalah 29 Desember 2017

Saya menerima pesan baru hari ini
Saya menerima email baru hari ini
Saya menerima pesan facebook baru hari ini


Printing german translations:
============================
Heute ist ein guter Tag!

Hallo, John! Schönen Tag!

www.google.com
www.google.my
www.google.id

Jetzt kostenlos registrieren
Jetzt kaufen
Weitere Jobs anzeigen

Ich habe cappucino für EUR 100,00 gekauft.

Es gibt einen Job für dich!
Es gibt 100 Jobs für dich!

Das aktuelle Datum ist 29. Dezember 2017

Ich erhalte heute eine neue Nachricht
Ich erhalte heute eine neue E-Mail
Ich erhalte heute eine neue Facebook-Nachricht
```