const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.author = 'Muhammad Adib Nor';
pres.title = 'Analisa Kerusakan Gate Valve 150 PSI';

// Color palette - Navy and Teal professional theme
const colors = {
  primary: "1E2761",     // Navy
  secondary: "028090",   // Teal
  accent: "00A896",      // Seafoam
  light: "CADCFC",       // Light blue
  white: "FFFFFF",
  dark: "212121",
  gray: "64748B"
};

// === SLIDE 1: TITLE SLIDE ===
let slide1 = pres.addSlide();
slide1.background = { color: colors.primary };

slide1.addText("ANALISA KERUSAKAN (FAILURE MODE)\nGATE VALVE 150 PSI", {
  x: 0.5, y: 1.5, w: 9, h: 1.2,
  fontSize: 32, bold: true, color: colors.white,
  align: "center", fontFace: "Arial"
});

slide1.addText("Pada Cooling Water System\nTugboat Berkah Pandanaran 01", {
  x: 0.5, y: 2.8, w: 9, h: 0.8,
  fontSize: 20, color: colors.light,
  align: "center", fontFace: "Arial"
});

slide1.addShape(pres.shapes.RECTANGLE, {
  x: 3.5, y: 3.8, w: 3, h: 0.05,
  fill: { color: colors.accent }
});

slide1.addText("Muhammad Adib Nor\nC2A023068\n\nProgram Studi S1 Teknik Mesin\nFakultas Teknik dan Ilmu Komputer\nUniversitas Muhammadiyah Semarang", {
  x: 0.5, y: 4.1, w: 9, h: 1.4,
  fontSize: 14, color: colors.white, align: "center", fontFace: "Arial"
});

// === SLIDE 2: LATAR BELAKANG ===
let slide2 = pres.addSlide();
slide2.background = { color: colors.white };

slide2.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.6,
  fill: { color: colors.primary }
});

slide2.addText("LATAR BELAKANG", {
  x: 0.5, y: 0.15, w: 9, h: 0.3,
  fontSize: 24, bold: true, color: colors.white,
  fontFace: "Arial"
});

slide2.addText("Tugboat Berkah Pandanaran melayani rute Semarang-Karimunjawa dengan mesin induk Caterpillar 3512C yang didukung cooling water system.\n\nGate Valve 150 PSI sebagai komponen pengatur aliran telah beroperasi 10 tahun (sejak 2014) dengan 6.200+ jam operasional.\n\nPermasalahan yang Ditemukan:\n• Kebocoran packing gland (setiap 4-6 bulan)\n• Kerusakan stem, disc, dan seat ring\n• Korosi pada body dan flange\n• Downtime yang mengganggu operasional kapal", {
  x: 0.5, y: 1.0, w: 9, h: 3.8,
  fontSize: 14, color: colors.dark,
  fontFace: "Arial"
});

// === SLIDE 3: RUMUSAN MASALAH & TUJUAN ===
let slide3 = pres.addSlide();
slide3.background = { color: colors.white };

slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.6,
  fill: { color: colors.primary }
});

slide3.addText("RUMUSAN MASALAH & TUJUAN", {
  x: 0.5, y: 0.15, w: 9, h: 0.3,
  fontSize: 24, bold: true, color: colors.white,
  fontFace: "Arial"
});

// Left column - Rumusan Masalah
slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.0, w: 4.3, h: 3.8,
  fill: { color: "F8F9FA" },
  line: { color: colors.secondary, width: 2 }
});

slide3.addText("RUMUSAN MASALAH", {
  x: 0.6, y: 1.15, w: 4.1, h: 0.4,
  fontSize: 16, bold: true, color: colors.secondary,
  fontFace: "Arial"
});

slide3.addText("1. Jenis failure mode apa saja yang terjadi?\n2. Apa penyebab utama (root cause) kegagalan?\n3. Seberapa besar dampak terhadap operasional?\n4. Tindakan perbaikan yang tepat?", {
  x: 0.7, y: 1.7, w: 3.9, h: 2.9,
  fontSize: 13, color: colors.dark,
  fontFace: "Arial"
});

// Right column - Tujuan
slide3.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.0, w: 4.3, h: 3.8,
  fill: { color: "F8F9FA" },
  line: { color: colors.accent, width: 2 }
});

slide3.addText("TUJUAN PENELITIAN", {
  x: 5.3, y: 1.15, w: 4.1, h: 0.4,
  fontSize: 16, bold: true, color: colors.accent,
  fontFace: "Arial"
});

slide3.addText("• Identifikasi jenis failure mode\n• Analisis penyebab kegagalan dengan metode FMEA\n• Evaluasi dampak terhadap sistem pendingin\n• Rekomendasi tindakan perbaikan dan pencegahan", {
  x: 5.4, y: 1.7, w: 3.9, h: 2.9,
  fontSize: 13, color: colors.dark,
  fontFace: "Arial"
});

// === SLIDE 4: METODE PENELITIAN ===
let slide4 = pres.addSlide();
slide4.background = { color: colors.white };

slide4.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.6,
  fill: { color: colors.primary }
});

slide4.addText("METODE PENELITIAN", {
  x: 0.5, y: 0.15, w: 9, h: 0.3,
  fontSize: 24, bold: true, color: colors.white,
  fontFace: "Arial"
});

// Method cards
const methods = [
  { title: "Observasi Lapangan", content: "Pengamatan langsung kondisi fisik Gate Valve dan sistem perpipaan cooling water", x: 0.5, y: 1.2 },
  { title: "Wawancara", content: "Dengan Chief Engineer mengenai riwayat kerusakan dan pola perawatan", x: 5.2, y: 1.2 },
  { title: "Studi Dokumentasi", content: "Logbook maintenance, nameplate Gate Valve, manual book mesin induk", x: 0.5, y: 2.8 },
  { title: "Analisis FMEA", content: "Penilaian Severity, Occurrence, Detection dan perhitungan RPN", x: 5.2, y: 2.8 }
];

methods.forEach((method, index) => {
  slide4.addShape(pres.shapes.RECTANGLE, {
    x: method.x, y: method.y, w: 4.3, h: 1.3,
    fill: { color: colors.light },
    line: { color: colors.secondary, width: 1 }
  });
  
  slide4.addText(method.title, {
    x: method.x + 0.2, y: method.y + 0.15, w: 3.9, h: 0.35,
    fontSize: 15, bold: true, color: colors.primary,
    fontFace: "Arial"
  });
  
  slide4.addText(method.content, {
    x: method.x + 0.2, y: method.y + 0.55, w: 3.9, h: 0.6,
    fontSize: 12, color: colors.dark,
    fontFace: "Arial"
  });
});

slide4.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.4, w: 9, h: 0.8,
  fill: { color: colors.secondary }
});

slide4.addText("Pendekatan: Deskriptif Analitis dengan FMEA", {
  x: 0.5, y: 4.55, w: 9, h: 0.5,
  fontSize: 16, bold: true, color: colors.white,
  align: "center", fontFace: "Arial"
});

// === SLIDE 5: TUGBOAT & COOLING WATER SYSTEM ===
let slide5 = pres.addSlide();
slide5.background = { color: colors.white };

slide5.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.6,
  fill: { color: colors.primary }
});

slide5.addText("TUGBOAT & COOLING WATER SYSTEM", {
  x: 0.5, y: 0.15, w: 9, h: 0.3,
  fontSize: 24, bold: true, color: colors.white,
  fontFace: "Arial"
});

slide5.addText("Tugboat Berkah Pandanaran", {
  x: 0.5, y: 1.0, w: 4.5, h: 0.35,
  fontSize: 16, bold: true, color: colors.secondary,
  fontFace: "Arial"
});

slide5.addText("• Tahun pembuatan: 2014\n• LOA: 28,5 meter\n• Gross Tonnage: 187 GT\n• Mesin: Caterpillar 3512C\n• Daya: 1.230 HP @ 1800 RPM\n• Jam operasional: 6.200+ jam", {
  x: 0.5, y: 1.5, w: 4.5, h: 1.8,
  fontSize: 13, color: colors.dark,
  fontFace: "Arial"
});

slide5.addText("Cooling Water System", {
  x: 5.2, y: 1.0, w: 4.3, h: 0.35,
  fontSize: 16, bold: true, color: colors.secondary,
  fontFace: "Arial"
});

slide5.addText("• Jenis: Fresh Water (Closed Circuit)\n• Kapasitas pompa: 180 L/min\n• Tekanan operasi: 130-150 PSI\n• Temp inlet: 32°C\n• Temp outlet: 78°C\n• Jumlah Gate Valve: 4 unit", {
  x: 5.2, y: 1.5, w: 4.3, h: 1.8,
  fontSize: 13, color: colors.dark,
  fontFace: "Arial"
});

slide5.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3.5, w: 9, h: 1.2,
  fill: { color: "FFF3E0" },
  line: { color: "FF9800", width: 2 }
});

slide5.addText("Fungsi Cooling Water System", {
  x: 0.7, y: 3.65, w: 8.6, h: 0.3,
  fontSize: 14, bold: true, color: "E65100",
  fontFace: "Arial"
});

slide5.addText("Mensirkulasikan fluida untuk menyerap panas dari cylinder liner dan cylinder head agar mesin tidak mengalami overheating", {
  x: 0.7, y: 4.0, w: 8.6, h: 0.6,
  fontSize: 12, color: colors.dark,
  fontFace: "Arial"
});

// === SLIDE 6: GATE VALVE SPESIFIKASI ===
let slide6 = pres.addSlide();
slide6.background = { color: colors.white };

slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.6,
  fill: { color: colors.primary }
});

slide6.addText("SPESIFIKASI GATE VALVE 150 PSI", {
  x: 0.5, y: 0.15, w: 9, h: 0.3,
  fontSize: 24, bold: true, color: colors.white,
  fontFace: "Arial"
});

// Main specs card
slide6.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.0, w: 4.5, h: 3.8,
  fill: { color: "F8F9FA" },
  line: { color: colors.secondary, width: 2 }
});

slide6.addText("DATA TEKNIS", {
  x: 0.7, y: 1.2, w: 4.1, h: 0.35,
  fontSize: 15, bold: true, color: colors.secondary,
  fontFace: "Arial"
});

slide6.addText("Merk: Kitz Corporation\nTipe: Gate Valve Flanged End\nMaterial Body: Cast Iron FC200\nMaterial Stem: Stainless Steel SUS304\nDiameter Nominal: DN 3 inch\nTekanan Kerja: 150 PSI (PN10)\nTahun Pemasangan: 2014\nUmur Pakai: 12 Tahun", {
  x: 0.8, y: 1.7, w: 3.9, h: 2.9,
  fontSize: 12, color: colors.dark,
  fontFace: "Arial"
});

// Komponen card
slide6.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.0, w: 4.3, h: 3.8,
  fill: { color: "F8F9FA" },
  line: { color: colors.accent, width: 2 }
});

slide6.addText("KOMPONEN UTAMA", {
  x: 5.4, y: 1.2, w: 3.9, h: 0.35,
  fontSize: 15, bold: true, color: colors.accent,
  fontFace: "Arial"
});

slide6.addText("1. Body - Rumah utama valve\n2. Handwheel - Roda operasi\n3. Stem - Batang penghubung\n4. Disc/Gate - Piringan penutup\n5. Seat Ring - Dudukan disc\n6. Packing Gland - Segel stem\n7. Bonnet - Penutup atas\n8. Flange - Sambungan pipa", {
  x: 5.4, y: 1.7, w: 3.9, h: 2.9,
  fontSize: 12, color: colors.dark,
  fontFace: "Arial"
});

// === SLIDE 7: RIWAYAT KERUSAKAN ===
let slide7 = pres.addSlide();
slide7.background = { color: colors.white };

slide7.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.6,
  fill: { color: colors.primary }
});

slide7.addText("RIWAYAT KERUSAKAN (2022-2026)", {
  x: 0.5, y: 0.15, w: 9, h: 0.3,
  fontSize: 24, bold: true, color: colors.white,
  fontFace: "Arial"
});

const tableData = [
  ["Tanggal", "Kerusakan", "Komponen", "Downtime"],
  ["Mar 2022", "Kebocoran eksternal", "Packing Gland", "4 jam"],
  ["Ags 2022", "Valve sulit diputar", "Stem", "2 jam"],
  ["Jan 2023", "Kebocoran eksternal", "Packing Gland", "4 jam"],
  ["Jun 2023", "Korosi pada body", "Body Valve", "6 jam"],
  ["Okt 2024", "Valve tidak menutup", "Disc & Seat Ring", "8 jam"],
  ["Feb 2025", "Kebocoran eksternal", "Packing Gland", "4 jam"],
  ["Okt 2025", "Stem bengkok", "Stem", "10 jam"],
  ["Mar 2026", "Korosi pada flange", "Flange", "5 jam"],
  ["TOTAL DOWNTIME", "", "", "43 JAM"]
];

slide7.addTable(tableData, {
  x: 0.5, y: 1.0, w: 9, h: 3.6,
  fontSize: 11, fontFace: "Arial",
  border: { pt: 1, color: colors.gray },
  align: "center", valign: "middle",
  colW: [1.5, 2.5, 2.5, 1.5]
});

slide7.addText("Kerusakan tersering: Kebocoran Packing Gland (3x dalam 4 tahun)", {
  x: 0.5, y: 4.8, w: 9, h: 0.5,
  fontSize: 13, bold: true, color: "E65100",
  align: "center", fontFace: "Arial"
});

// === SLIDE 8: METODE FMEA ===
let slide8 = pres.addSlide();
slide8.background = { color: colors.white };

slide8.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.6,
  fill: { color: colors.primary }
});

slide8.addText("METODE FMEA (Failure Mode and Effect Analysis)", {
  x: 0.5, y: 0.15, w: 9, h: 0.3,
  fontSize: 24, bold: true, color: colors.white,
  fontFace: "Arial"
});

slide8.addText("Metode sistematis untuk mengidentifikasi, mengevaluasi, dan memprioritaskan potensi kegagalan komponen berdasarkan tingkat risiko", {
  x: 0.5, y: 0.9, w: 9, h: 0.4,
  fontSize: 13, color: colors.dark, italic: true,
  fontFace: "Arial", align: "center"
});

slide8.addText("RPN = Severity × Occurrence × Detection\nNilai RPN: 1 - 1000 | Semakin tinggi RPN = Semakin prioritas untuk ditangani", {
  x: 1.5, y: 4.2, w: 7, h: 0.8,
  fontSize: 18, bold: true, color: colors.secondary,
  fontFace: "Arial", align: "center"
});

// === SLIDE 9: HASIL ANALISIS FMEA ===
let slide9 = pres.addSlide();
slide9.background = { color: colors.white };

slide9.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.6,
  fill: { color: colors.primary }
});

slide9.addText("HASIL ANALISIS FMEA", {
  x: 0.5, y: 0.15, w: 9, h: 0.3,
  fontSize: 24, bold: true, color: colors.white,
  fontFace: "Arial"
});

const fmeaData = [
  ["Komponen", "Failure Mode", "S", "O", "D", "RPN"],
  ["Disc", "Keausan permukaan", "8", "5", "5", "200"],
  ["Packing Gland", "Kebocoran eksternal", "7", "8", "3", "168"],
  ["Body Valve", "Korosi pada body", "9", "3", "5", "135"],
  ["Stem", "Stem bengkok", "8", "4", "4", "128"],
  ["Seat Ring", "Seat ring aus", "7", "4", "4", "112"],
  ["Baut & Mur", "Korosi pada baut", "6", "5", "3", "90"],
  ["Flange", "Korosi pada flange", "7", "4", "3", "84"],
  ["Handwheel", "Handwheel macet", "5", "5", "2", "50"]
];

slide9.addTable(fmeaData, {
  x: 0.3, y: 0.9, w: 9.4, h: 4.0,
  fontSize: 11, fontFace: "Arial",
  border: { pt: 1, color: colors.gray },
  align: "center", valign: "middle",
  colW: [1.5, 2.2, 0.7, 0.7, 0.7, 1.0]
});

// === SLIDE 10: PRIORITAS PENANGANAN ===
let slide10 = pres.addSlide();
slide10.background = { color: colors.white };

slide10.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.6,
  fill: { color: colors.primary }
});

slide10.addText("PRIORITAS PENANGANAN BERDASARKAN RPN", {
  x: 0.5, y: 0.15, w: 9, h: 0.3,
  fontSize: 24, bold: true, color: colors.white,
  fontFace: "Arial"
});

slide10.addText("Prioritas 1: Disc (RPN 200)\nPrioritas 2: Packing Gland (RPN 168)\nPrioritas 3: Body Valve (RPN 135)", {
  x: 0.5, y: 1.0, w: 9, h: 1.0,
  fontSize: 18, bold: true, color: "D32F2F",
  align: "center", fontFace: "Arial"
});

slide10.addText("PRIORITAS TINGGI\nRPN > 150", {
  x: 0.5, y: 2.5, w: 3, h: 0.6,
  fontSize: 14, bold: true, color: "D32F2F",
  align: "center", fill: { color: "FFEBEE" }
});

slide10.addText("PRIORITAS SEDANG\n101-150", {
  x: 3.5, y: 2.5, w: 3, h: 0.6,
  fontSize: 14, bold: true, color: "F57C00",
  align: "center", fill: { color: "FFF3E0" }
});

slide10.addText("PRIORITAS RENDAH\n< 100", {
  x: 6.5, y: 2.5, w: 3, h: 0.6,
  fontSize: 14, bold: true, color: "388E3C",
  align: "center", fill: { color: "E8F5E9" }
});

// === SLIDE 11: REKOMENDASI ===
let slide11 = pres.addSlide();
slide11.background = { color: colors.white };

slide11.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.6,
  fill: { color: colors.primary }
});

slide11.addText("REKOMENDASI TINDAKAN PERBAIKAN", {
  x: 0.5, y: 0.15, w: 9, h: 0.3,
  fontSize: 24, bold: true, color: colors.white,
  fontFace: "Arial"
});

slide11.addText("1. Ganti Disc dan Packing Gland segera (Prioritas Tinggi)\n2. Overhaul total Gate Valve saat docking berikutnya\n3. Perawatan preventif: Packing 250 jam, Disc 500 jam\n4. Gunakan material marine grade untuk anti-korosi\n5. Pelatihan operator prosedur operasi valve", {
  x: 0.5, y: 1.0, w: 9, h: 3.5,
  fontSize: 16, color: colors.dark,
  fontFace: "Arial"
});

// === SLIDE 12: KESIMPULAN ===
let slide12 = pres.addSlide();
slide12.background = { color: colors.white };

slide12.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.6,
  fill: { color: colors.primary }
});

slide12.addText("KESIMPULAN", {
  x: 0.5, y: 0.15, w: 9, h: 0.3,
  fontSize: 24, bold: true, color: colors.white,
  fontFace: "Arial"
});

slide12.addText("1. 8 jenis failure mode teridentifikasi dengan Disc (RPN 200) dan Packing Gland (RPN 168) sebagai prioritas tertinggi\n2. Total downtime 43 jam (2022-2026)\n3. Penyebab utama: usia 12 tahun + lingkungan laut agresif\n4. FMEA efektif untuk prioritas perbaikan berbasis data\n5. Rekomendasi: overhaul + perawatan preventif ketat", {
  x: 0.5, y: 1.0, w: 9, h: 3.5,
  fontSize: 15, color: colors.dark,
  fontFace: "Arial"
});

// === SLIDE 13: CLOSING ===
let slide13 = pres.addSlide();
slide13.background = { color: colors.primary };

slide13.addText("TERIMA KASIH", {
  x: 0.5, y: 1.8, w: 9, h: 0.8,
  fontSize: 40, bold: true, color: colors.white,
  align: "center", fontFace: "Arial"
});

slide13.addText("Muhammad Adib Nor\nC2A023068\nProgram Studi S1 Teknik Mesin\nUniversitas Muhammadiyah Semarang", {
  x: 0.5, y: 3.1, w: 9, h: 1.2,
  fontSize: 16, color: colors.light, align: "center", fontFace: "Arial"
});

slide13.addText("Seminar Kerja Praktik - 2026", {
  x: 0.5, y: 4.8, w: 9, h: 0.4,
  fontSize: 13, color: colors.light, italic: true,
  align: "center", fontFace: "Arial"
});

// Write file
pres.writeFile({ fileName: "Seminar_KP_Gate_Valve.pptx" });
console.log("✅ Presentasi berhasil dibuat!");
