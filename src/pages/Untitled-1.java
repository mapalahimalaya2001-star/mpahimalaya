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

slide1.addText([
  { text: "Muhammad Adib Nor\n", options: { fontSize: 18, bold: true, breakLine: true } },
  { text: "C2A023068\n", options: { fontSize: 16, breakLine: true } },
  { text: "\nProgram Studi S1 Teknik Mesin\n", options: { fontSize: 14, breakLine: true } },
  { text: "Fakultas Teknik dan Ilmu Komputer\n", options: { fontSize: 14, breakLine: true } },
  { text: "Universitas Muhammadiyah Semarang", options: { fontSize: 14 } }
], {
  x: 0.5, y: 4.1, w: 9, h: 1.4,
  color: colors.white, align: "center", fontFace: "Arial"
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
  fontFace: "Arial", margin: 0
});

slide2.addText([
  { text: "Tugboat Berkah Pandanaran ", options: { bold: true } },
  { text: "melayani rute Semarang-Karimunjawa dengan mesin induk ", options: {} },
  { text: "Caterpillar 3512C ", options: { bold: true } },
  { text: "yang didukung cooling water system.\n\n", options: { breakLine: true } },
  
  { text: "Gate Valve 150 PSI ", options: { bold: true } },
  { text: "sebagai komponen pengatur aliran telah beroperasi ", options: {} },
  { text: "10 tahun ", options: { bold: true } },
  { text: "(sejak 2014) dengan ", options: {} },
  { text: "6.200+ jam operasional.\n\n", options: { bold: true, breakLine: true } },
  
  { text: "Permasalahan yang Ditemukan:", options: { bold: true, breakLine: true } },
  { text: "• Kebocoran packing gland (setiap 4-6 bulan)\n", options: { breakLine: true } },
  { text: "• Kerusakan stem, disc, dan seat ring\n", options: { breakLine: true } },
  { text: "• Korosi pada body dan flange\n", options: { breakLine: true } },
  { text: "• Downtime yang mengganggu operasional kapal", options: {} }
], {
  x: 0.5, y: 1.0, w: 9, h: 3.8,
  fontSize: 14, color: colors.dark,
  fontFace: "Arial", lineSpacing: 24
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
  fontFace: "Arial", margin: 0
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

slide3.addText([
  { text: "1. Jenis failure mode apa saja yang terjadi?\n\n", options: { breakLine: true } },
  { text: "2. Apa penyebab utama (root cause) kegagalan?\n\n", options: { breakLine: true } },
  { text: "3. Seberapa besar dampak terhadap operasional?\n\n", options: { breakLine: true } },
  { text: "4. Tindakan perbaikan yang tepat?", options: {} }
], {
  x: 0.7, y: 1.7, w: 3.9, h: 2.9,
  fontSize: 13, color: colors.dark,
  fontFace: "Arial", lineSpacing: 20
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

slide3.addText([
  { text: "• Identifikasi jenis failure mode\n\n", options: { breakLine: true } },
  { text: "• Analisis penyebab kegagalan dengan metode FMEA\n\n", options: { breakLine: true } },
  { text: "• Evaluasi dampak terhadap sistem pendingin\n\n", options: { breakLine: true } },
  { text: "• Rekomendasi tindakan perbaikan dan pencegahan", options: {} }
], {
  x: 5.4, y: 1.7, w: 3.9, h: 2.9,
  fontSize: 13, color: colors.dark,
  fontFace: "Arial", lineSpacing: 20
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
  fontFace: "Arial", margin: 0
});

// Method cards
const methods = [
  {
    title: "Observasi Lapangan",
    content: "Pengamatan langsung kondisi fisik Gate Valve dan sistem perpipaan cooling water",
    x: 0.5, y: 1.2
  },
  {
    title: "Wawancara",
    content: "Dengan Chief Engineer mengenai riwayat kerusakan dan pola perawatan",
    x: 5.2, y: 1.2
  },
  {
    title: "Studi Dokumentasi",
    content: "Logbook maintenance, nameplate Gate Valve, manual book mesin induk",
    x: 0.5, y: 2.8
  },
  {
    title: "Analisis FMEA",
    content: "Penilaian Severity, Occurrence, Detection dan perhitungan RPN",
    x: 5.2, y: 2.8
  }
];

methods.forEach(method => {
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
  align: "center", fontFace: "Arial", valign: "middle"
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
  fontFace: "Arial", margin: 0
});

// Left section - Tugboat
slide5.addText("Tugboat Berkah Pandanaran", {
  x: 0.5, y: 1.0, w: 4.5, h: 0.35,
  fontSize: 16, bold: true, color: colors.secondary,
  fontFace: "Arial"
});

slide5.addText([
  { text: "• Tahun pembuatan: ", options: { bold: true } },
  { text: "2014\n", options: { breakLine: true } },
  { text: "• LOA: ", options: { bold: true } },
  { text: "28,5 meter\n", options: { breakLine: true } },
  { text: "• Gross Tonnage: ", options: { bold: true } },
  { text: "187 GT\n", options: { breakLine: true } },
  { text: "• Mesin: ", options: { bold: true } },
  { text: "Caterpillar 3512C\n", options: { breakLine: true } },
  { text: "• Daya: ", options: { bold: true } },
  { text: "1.230 HP @ 1800 RPM\n", options: { breakLine: true } },
  { text: "• Jam operasional: ", options: { bold: true } },
  { text: "6.200+ jam", options: {} }
], {
  x: 0.5, y: 1.5, w: 4.5, h: 1.8,
  fontSize: 13, color: colors.dark,
  fontFace: "Arial", lineSpacing: 20
});

// Right section - Cooling System
slide5.addText("Cooling Water System", {
  x: 5.2, y: 1.0, w: 4.3, h: 0.35,
  fontSize: 16, bold: true, color: colors.secondary,
  fontFace: "Arial"
});

slide5.addText([
  { text: "• Jenis: ", options: { bold: true } },
  { text: "Fresh Water (Closed Circuit)\n", options: { breakLine: true } },
  { text: "• Kapasitas pompa: ", options: { bold: true } },
  { text: "180 L/min\n", options: { breakLine: true } },
  { text: "• Tekanan operasi: ", options: { bold: true } },
  { text: "130-150 PSI\n", options: { breakLine: true } },
  { text: "• Temp inlet: ", options: { bold: true } },
  { text: "32°C\n", options: { breakLine: true } },
  { text: "• Temp outlet: ", options: { bold: true } },
  { text: "78°C\n", options: { breakLine: true } },
  { text: "• Jumlah Gate Valve: ", options: { bold: true } },
  { text: "4 unit", options: {} }
], {
  x: 5.2, y: 1.5, w: 4.3, h: 1.8,
  fontSize: 13, color: colors.dark,
  fontFace: "Arial", lineSpacing: 20
});

// Bottom - Function
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
  fontFace: "Arial", margin: 0
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

slide6.addText([
  { text: "Merk: ", options: { bold: true } },
  { text: "Kitz Corporation\n\n", options: { breakLine: true } },
  
  { text: "Tipe: ", options: { bold: true } },
  { text: "Gate Valve Flanged End\n\n", options: { breakLine: true } },
  
  { text: "Material Body: ", options: { bold: true } },
  { text: "Cast Iron FC200\n\n", options: { breakLine: true } },
  
  { text: "Material Stem: ", options: { bold: true } },
  { text: "Stainless Steel SUS304\n\n", options: { breakLine: true } },
  
  { text: "Diameter Nominal: ", options: { bold: true } },
  { text: "DN 3 inch\n\n", options: { breakLine: true } },
  
  { text: "Tekanan Kerja: ", options: { bold: true } },
  { text: "150 PSI (PN10)\n\n", options: { breakLine: true } },
  
  { text: "Tahun Pemasangan: ", options: { bold: true } },
  { text: "2014\n\n", options: { breakLine: true } },
  
  { text: "Umur Pakai: ", options: { bold: true, color: "D32F2F" } },
  { text: "12 Tahun", options: { color: "D32F2F" } }
], {
  x: 0.8, y: 1.7, w: 3.9, h: 2.9,
  fontSize: 12, color: colors.dark,
  fontFace: "Arial", lineSpacing: 18
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

const components = [
  "Body - Rumah utama valve",
  "Handwheel - Roda operasi",
  "Stem - Batang penghubung",
  "Disc/Gate - Piringan penutup",
  "Seat Ring - Dudukan disc",
  "Packing Gland - Segel stem",
  "Bonnet - Penutup atas",
  "Flange - Sambungan pipa"
];

slide6.addText(
  components.map((comp, i) => ({ 
    text: `${i+1}. ${comp}\n`, 
    options: i < components.length - 1 ? { breakLine: true } : {}
  })), {
  x: 5.4, y: 1.7, w: 3.9, h: 2.9,
  fontSize: 12, color: colors.dark,
  fontFace: "Arial", lineSpacing: 18
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
  fontFace: "Arial", margin: 0
});

// Table data
const tableData = [
  [
    { text: "Tanggal", options: { bold: true, fill: { color: colors.secondary }, color: colors.white } },
    { text: "Kerusakan", options: { bold: true, fill: { color: colors.secondary }, color: colors.white } },
    { text: "Komponen", options: { bold: true, fill: { color: colors.secondary }, color: colors.white } },
    { text: "Downtime", options: { bold: true, fill: { color: colors.secondary }, color: colors.white } }
  ],
  ["Mar 2022", "Kebocoran eksternal", "Packing Gland", "4 jam"],
  ["Ags 2022", "Valve sulit diputar", "Stem", "2 jam"],
  ["Jan 2023", "Kebocoran eksternal", "Packing Gland", "4 jam"],
  ["Jun 2023", "Korosi pada body", "Body Valve", "6 jam"],
  ["Okt 2024", "Valve tidak menutup", "Disc & Seat Ring", "8 jam"],
  ["Feb 2025", "Kebocoran eksternal", "Packing Gland", "4 jam"],
  ["Okt 2025", "Stem bengkok", "Stem", "10 jam"],
  ["Mar 2026", "Korosi pada flange", "Flange", "5 jam"],
  [
    { text: "TOTAL DOWNTIME", options: { bold: true, fill: { color: "FFEBEE" } } },
    { text: "", options: { fill: { color: "FFEBEE" } } },
    { text: "", options: { fill: { color: "FFEBEE" } } },
    { text: "43 JAM", options: { bold: true, color: "D32F2F", fill: { color: "FFEBEE" } } }
  ]
];

slide7.addTable(tableData, {
  x: 0.5, y: 1.0, w: 9, h: 3.6,
  fontSize: 11, fontFace: "Arial",
  border: { pt: 1, color: colors.gray },
  align: "center", valign: "middle",
  colW: [1.5, 2.5, 2.5, 2.5]
});

slide7.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.8, w: 9, h: 0.5,
  fill: { color: "FFF3E0" },
  line: { color: "FF9800", width: 1 }
});

slide7.addText("Kerusakan tersering: Kebocoran Packing Gland (3x dalam 4 tahun)", {
  x: 0.5, y: 4.8, w: 9, h: 0.5,
  fontSize: 13, bold: true, color: "E65100",
  align: "center", valign: "middle", fontFace: "Arial"
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
  fontFace: "Arial", margin: 0
});

slide8.addText("Metode sistematis untuk mengidentifikasi, mengevaluasi, dan memprioritaskan potensi kegagalan komponen berdasarkan tingkat risiko", {
  x: 0.5, y: 0.9, w: 9, h: 0.4,
  fontSize: 13, color: colors.dark, italic: true,
  fontFace: "Arial", align: "center"
});

// Parameter cards
const params = [
  {
    title: "Severity (S)",
    subtitle: "Tingkat Keparahan",
    desc: "Seberapa besar dampak kegagalan terhadap sistem",
    scale: "Skala 1-10",
    color: "E53935",
    x: 0.5, y: 1.6
  },
  {
    title: "Occurrence (O)",
    subtitle: "Frekuensi Kejadian",
    desc: "Seberapa sering kegagalan terjadi",
    scale: "Skala 1-10",
    color: "FB8C00",
    x: 3.5, y: 1.6
  },
  {
    title: "Detection (D)",
    subtitle: "Kemudahan Deteksi",
    desc: "Seberapa mudah kegagalan terdeteksi",
    scale: "Skala 1-10",
    color: "43A047",
    x: 6.5, y: 1.6
  }
];

params.forEach(param => {
  slide8.addShape(pres.shapes.RECTANGLE, {
    x: param.x, y: param.y, w: 2.8, h: 2.2,
    fill: { color: colors.white },
    line: { color: param.color, width: 3 }
  });
  
  slide8.addText(param.title, {
    x: param.x + 0.15, y: param.y + 0.15, w: 2.5, h: 0.35,
    fontSize: 16, bold: true, color: param.color,
    fontFace: "Arial", align: "center"
  });
  
  slide8.addText(param.subtitle, {
    x: param.x + 0.15, y: param.y + 0.55, w: 2.5, h: 0.25,
    fontSize: 12, color: colors.gray,
    fontFace: "Arial", align: "center", italic: true
  });
  
  slide8.addText(param.desc, {
    x: param.x + 0.15, y: param.y + 0.95, w: 2.5, h: 0.8,
    fontSize: 11, color: colors.dark,
    fontFace: "Arial", align: "center"
  });
  
  slide8.addShape(pres.shapes.RECTANGLE, {
    x: param.x + 0.15, y: param.y + 1.8, w: 2.5, h: 0.3,
    fill: { color: param.color }
  });
  
  slide8.addText(param.scale, {
    x: param.x + 0.15, y: param.y + 1.8, w: 2.5, h: 0.3,
    fontSize: 11, bold: true, color: colors.white,
    fontFace: "Arial", align: "center", valign: "middle"
  });
});

// Formula
slide8.addShape(pres.shapes.RECTANGLE, {
  x: 1.5, y: 4.1, w: 7, h: 0.8,
  fill: { color: colors.secondary }
});

slide8.addText("RPN = Severity × Occurrence × Detection", {
  x: 1.5, y: 4.2, w: 7, h: 0.6,
  fontSize: 20, bold: true, color: colors.white,
  fontFace: "Arial", align: "center", valign: "middle"
});

slide8.addText("Nilai RPN: 1 - 1000  |  Semakin tinggi RPN = Semakin prioritas untuk ditangani", {
  x: 0.5, y: 5.0, w: 9, h: 0.3,
  fontSize: 11, color: colors.dark,
  fontFace: "Arial", align: "center", italic: true
});

// === SLIDE 9: HASIL ANALISIS FMEA - TABEL ===
let slide9 = pres.addSlide();
slide9.background = { color: colors.white };

slide9.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.6,
  fill: { color: colors.primary }
});

slide9.addText("HASIL ANALISIS FMEA", {
  x: 0.5, y: 0.15, w: 9, h: 0.3,
  fontSize: 24, bold: true, color: colors.white,
  fontFace: "Arial", margin: 0
});

const fmeaTable = [
  [
    { text: "Komponen", options: { bold: true, fill: { color: colors.secondary }, color: colors.white } },
    { text: "Failure Mode", options: { bold: true, fill: { color: colors.secondary }, color: colors.white } },
    { text: "S", options: { bold: true, fill: { color: colors.secondary }, color: colors.white } },
    { text: "O", options: { bold: true, fill: { color: colors.secondary }, color: colors.white } },
    { text: "D", options: { bold: true, fill: { color: colors.secondary }, color: colors.white } },
    { text: "RPN", options: { bold: true, fill: { color: colors.secondary }, color: colors.white } }
  ],
  [
    "Disc",
    "Keausan permukaan",
    { text: "8", options: { color: "D32F2F" } },
    { text: "5", options: { color: "FF6F00" } },
    { text: "5", options: { color: "FF6F00" } },
    { text: "200", options: { bold: true, fill: { color: "FFEBEE" }, color: "D32F2F" } }
  ],
  [
    "Packing Gland",
    "Kebocoran eksternal",
    { text: "7", options: { color: "D32F2F" } },
    { text: "8", options: { color: "D32F2F" } },
    { text: "3", options: { color: "FBC02D" } },
    { text: "168", options: { bold: true, fill: { color: "FFEBEE" }, color: "D32F2F" } }
  ],
  [
    "Body Valve",
    "Korosi pada body",
    { text: "9", options: { color: "D32F2F" } },
    { text: "3", options: { color: "FBC02D" } },
    { text: "5", options: { color: "FF6F00" } },
    { text: "135", options: { bold: true, fill: { color: "FFF3E0" }, color: "F57C00" } }
  ],
  [
    "Stem",
    "Stem bengkok",
    { text: "8", options: { color: "D32F2F" } },
    { text: "4", options: { color: "FF6F00" } },
    { text: "4", options: { color: "FF6F00" } },
    { text: "128", options: { bold: true, fill: { color: "FFF3E0" }, color: "F57C00" } }
  ],
  [
    "Seat Ring",
    "Seat ring aus",
    { text: "7", options: { color: "D32F2F" } },
    { text: "4", options: { color: "FF6F00" } },
    { text: "4", options: { color: "FF6F00" } },
    { text: "112", options: { bold: true, fill: { color: "FFF3E0" }, color: "F57C00" } }
  ],
  [
    "Baut & Mur",
    "Korosi pada baut",
    { text: "6", options: { color: "FF6F00" } },
    { text: "5", options: { color: "FF6F00" } },
    { text: "3", options: { color: "FBC02D" } },
    { text: "90", options: { bold: true, fill: { color: "E8F5E9" }, color: "388E3C" } }
  ],
  [
    "Flange",
    "Korosi pada flange",
    { text: "7", options: { color: "D32F2F" } },
    { text: "4", options: { color: "FF6F00" } },
    { text: "3", options: { color: "FBC02D" } },
    { text: "84", options: { bold: true, fill: { color: "E8F5E9" }, color: "388E3C" } }
  ],
  [
    "Handwheel",
    "Handwheel macet",
    { text: "5", options: { color: "FF6F00" } },
    { text: "5", options: { color: "FF6F00" } },
    { text: "2", options: { color: "66BB6A" } },
    { text: "50", options: { bold: true, fill: { color: "E8F5E9" }, color: "388E3C" } }
  ]
];

slide9.addTable(fmeaTable, {
  x: 0.3, y: 0.9, w: 9.4, h: 4.0,
  fontSize: 11, fontFace: "Arial",
  border: { pt: 1, color: colors.gray },
  align: "center", valign: "middle",
  colW: [1.8, 2.5, 0.7, 0.7, 0.7, 1.0]
});

slide9.addText("S = Severity  |  O = Occurrence  |  D = Detection  |  RPN = Risk Priority Number", {
  x: 0.5, y: 5.0, w: 9, h: 0.3,
  fontSize: 10, color: colors.gray,
  fontFace: "Arial", align: "center", italic: true
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
  fontFace: "Arial", margin: 0
});

// Chart data
const chartData = [{
  name: "RPN Value",
  labels: ["Disc", "Packing Gland", "Body Valve", "Stem", "Seat Ring", "Baut & Mur", "Flange", "Handwheel"],
  values: [200, 168, 135, 128, 112, 90, 84, 50]
}];

slide10.addChart(pres.charts.BAR, chartData, {
  x: 0.5, y: 1.0, w: 9, h: 3.5,
  barDir: "col",
  chartColors: ["D32F2F"],
  showTitle: false,
  showLegend: false,
  showValue: true,
  dataLabelPosition: "outEnd",
  dataLabelColor: colors.dark,
  dataLabelFontSize: 11,
  catAxisLabelColor: colors.dark,
  catAxisLabelFontSize: 10,
  valAxisLabelColor: colors.gray,
  valGridLine: { color: "E2E8F0", size: 0.5 },
  catGridLine: { style: "none" },
  chartArea: { fill: { color: colors.white } },
  valAxisMaxVal: 220
});

// Priority zones
slide10.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.6, w: 3, h: 0.6,
  fill: { color: "FFEBEE" },
  line: { color: "D32F2F", width: 2 }
});

slide10.addText("PRIORITAS TINGGI\nRPN > 150", {
  x: 0.5, y: 4.65, w: 3, h: 0.5,
  fontSize: 11, bold: true, color: "D32F2F",
  align: "center", valign: "middle", fontFace: "Arial"
});

slide10.addShape(pres.shapes.RECTANGLE, {
  x: 3.5, y: 4.6, w: 3, h: 0.6,
  fill: { color: "FFF3E0" },
  line: { color: "F57C00", width: 2 }
});

slide10.addText("PRIORITAS SEDANG\n101-150", {
  x: 3.5, y: 4.65, w: 3, h: 0.5,
  fontSize: 11, bold: true, color: "F57C00",
  align: "center", valign: "middle", fontFace: "Arial"
});

slide10.addShape(pres.shapes.RECTANGLE, {
  x: 6.5, y: 4.6, w: 3, h: 0.6,
  fill: { color: "E8F5E9" },
  line: { color: "388E3C", width: 2 }
});

slide10.addText("PRIORITAS RENDAH\n< 100", {
  x: 6.5, y: 4.65, w: 3, h: 0.5,
  fontSize: 11, bold: true, color: "388E3C",
  align: "center", valign: "middle", fontFace: "Arial"
});

// === SLIDE 11: ANALISIS PRIORITAS 1 & 2 ===
let slide11 = pres.addSlide();
slide11.background = { color: colors.white };

slide11.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.6,
  fill: { color: colors.primary }
});

slide11.addText("ANALISIS DETAIL: PRIORITAS TINGGI", {
  x: 0.5, y: 0.15, w: 9, h: 0.3,
  fontSize: 24, bold: true, color: colors.white,
  fontFace: "Arial", margin: 0
});

// Priority 1
slide11.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.0, w: 9, h: 1.8,
  fill: { color: "FFEBEE" },
  line: { color: "D32F2F", width: 3 }
});

slide11.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.0, w: 0.15, h: 1.8,
  fill: { color: "D32F2F" }
});

slide11.addText("PRIORITAS 1: Keausan Disc (RPN = 200)", {
  x: 0.8, y: 1.15, w: 8.5, h: 0.35,
  fontSize: 15, bold: true, color: "D32F2F",
  fontFace: "Arial"
});

slide11.addText([
  { text: "• Penyebab: ", options: { bold: true } },
  { text: "Gesekan berulang selama 12 tahun operasi\n", options: { breakLine: true } },
  { text: "• Dampak: ", options: { bold: true } },
  { text: "Valve tidak menutup sempurna → internal leakage → tekanan sistem tidak stabil\n", options: { breakLine: true } },
  { text: "• Deteksi: ", options: { bold: true } },
  { text: "Cukup sulit, disc berada di bagian internal valve\n", options: { breakLine: true } },
  { text: "• Rekomendasi: ", options: { bold: true, color: "D32F2F" } },
  { text: "Ganti disc segera, inspeksi setiap 500 jam operasi", options: { color: "D32F2F" } }
], {
  x: 0.8, y: 1.6, w: 8.5, h: 1.05,
  fontSize: 11, color: colors.dark,
  fontFace: "Arial", lineSpacing: 16
});

// Priority 2
slide11.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3.0, w: 9, h: 1.8,
  fill: { color: "FFEBEE" },
  line: { color: "D32F2F", width: 3 }
});

slide11.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3.0, w: 0.15, h: 1.8,
  fill: { color: "D32F2F" }
});

slide11.addText("PRIORITAS 2: Kebocoran Packing Gland (RPN = 168)", {
  x: 0.8, y: 3.15, w: 8.5, h: 0.35,
  fontSize: 15, bold: true, color: "D32F2F",
  fontFace: "Arial"
});

slide11.addText([
  { text: "• Penyebab: ", options: { bold: true } },
  { text: "Packing aus akibat tekanan tinggi dan usia pakai\n", options: { breakLine: true } },
  { text: "• Dampak: ", options: { bold: true } },
  { text: "Fluida keluar dari sistem → volume berkurang → efektivitas pendinginan turun\n", options: { breakLine: true } },
  { text: "• Frekuensi: ", options: { bold: true } },
  { text: "Terjadi 3x dalam 4 tahun (rata-rata setiap 4-6 bulan)\n", options: { breakLine: true } },
  { text: "• Rekomendasi: ", options: { bold: true, color: "D32F2F" } },
  { text: "Ganti packing gland setiap 250 jam operasi", options: { color: "D32F2F" } }
], {
  x: 0.8, y: 3.6, w: 8.5, h: 1.05,
  fontSize: 11, color: colors.dark,
  fontFace: "Arial", lineSpacing: 16
});

// === SLIDE 12: REKOMENDASI TINDAKAN ===
let slide12 = pres.addSlide();
slide12.background = { color: colors.white };

slide12.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.6,
  fill: { color: colors.primary }
});

slide12.addText("REKOMENDASI TINDAKAN PERBAIKAN", {
  x: 0.5, y: 0.15, w: 9, h: 0.3,
  fontSize: 24, bold: true, color: colors.white,
  fontFace: "Arial", margin: 0
});

const recommendations = [
  {
    comp: "Disc",
    rpn: "200",
    action: "Ganti segera",
    prevent: "Hindari buka-tutup berlebihan, pelumasan rutin",
    interval: "500 jam",
    color: "D32F2F"
  },
  {
    comp: "Packing Gland",
    rpn: "168",
    action: "Ganti segera",
    prevent: "Pemeriksaan visual rutin",
    interval: "250 jam",
    color: "D32F2F"
  },
  {
    comp: "Body Valve",
    rpn: "135",
    action: "Ukur ketebalan dinding",
    prevent: "Cat anti-korosi marine grade",
    interval: "Tahunan",
    color: "F57C00"
  },
  {
    comp: "Stem",
    rpn: "128",
    action: "Periksa ulir stem",
    prevent: "Lumuri dengan grease anti-korosi",
    interval: "50 jam",
    color: "F57C00"
  }
];

const recTable = [
  [
    { text: "Komponen", options: { bold: true, fill: { color: colors.secondary }, color: colors.white } },
    { text: "RPN", options: { bold: true, fill: { color: colors.secondary }, color: colors.white } },
    { text: "Tindakan Perbaikan", options: { bold: true, fill: { color: colors.secondary }, color: colors.white } },
    { text: "Tindakan Pencegahan", options: { bold: true, fill: { color: colors.secondary }, color: colors.white } },
    { text: "Interval", options: { bold: true, fill: { color: colors.secondary }, color: colors.white } }
  ],
  ...recommendations.map(r => [
    { text: r.comp, options: { bold: true } },
    { text: r.rpn, options: { bold: true, color: r.color } },
    r.action,
    r.prevent,
    { text: r.interval, options: { bold: true } }
  ])
];

slide12.addTable(recTable, {
  x: 0.3, y: 0.9, w: 9.4, h: 2.3,
  fontSize: 10, fontFace: "Arial",
  border: { pt: 1, color: colors.gray },
  valign: "middle",
  colW: [1.5, 0.8, 2.2, 2.8, 1.1]
});

// General recommendations
slide12.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3.4, w: 9, h: 1.8,
  fill: { color: colors.light },
  line: { color: colors.secondary, width: 2 }
});

slide12.addText("REKOMENDASI UMUM", {
  x: 0.7, y: 3.55, w: 8.6, h: 0.3,
  fontSize: 14, bold: true, color: colors.primary,
  fontFace: "Arial"
});

slide12.addText([
  { text: "1. ", options: { bold: true } },
  { text: "Overhaul total Gate Valve ", options: { bold: true } },
  { text: "mengingat usia sudah 12 tahun\n", options: { breakLine: true } },
  
  { text: "2. ", options: { bold: true } },
  { text: "Pelatihan operator ", options: { bold: true } },
  { text: "tentang prosedur operasi valve yang benar\n", options: { breakLine: true } },
  
  { text: "3. ", options: { bold: true } },
  { text: "Gunakan grease dan cat anti-korosi berbasis marine grade ", options: { bold: true } },
  { text: "untuk lingkungan laut\n", options: { breakLine: true } },
  
  { text: "4. ", options: { bold: true } },
  { text: "Dokumentasi ketat ", options: { bold: true } },
  { text: "pada logbook maintenance untuk monitoring kondisi", options: {} }
], {
  x: 0.8, y: 3.95, w: 8.4, h: 1.1,
  fontSize: 11, color: colors.dark,
  fontFace: "Arial", lineSpacing: 18
});

// === SLIDE 13: KESIMPULAN ===
let slide13 = pres.addSlide();
slide13.background = { color: colors.white };

slide13.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.6,
  fill: { color: colors.primary }
});

slide13.addText("KESIMPULAN", {
  x: 0.5, y: 0.15, w: 9, h: 0.3,
  fontSize: 24, bold: true, color: colors.white,
  fontFace: "Arial", margin: 0
});

slide13.addText([
  { text: "1. Ditemukan 8 jenis failure mode ", options: { bold: true, fontSize: 13, breakLine: true } },
  { text: "   pada Gate Valve: kebocoran packing gland, stem bengkok, keausan disc, keausan seat ring, korosi body, korosi flange, handwheel macet, dan korosi baut-mur.\n\n", options: { fontSize: 12, breakLine: true } },
  
  { text: "2. Penyebab utama kegagalan ", options: { bold: true, fontSize: 13, breakLine: true } },
  { text: "   adalah usia pakai 12 tahun dan lingkungan laut yang agresif (kelembaban tinggi + paparan air laut).\n\n", options: { fontSize: 12, breakLine: true } },
  
  { text: "3. Dampak signifikan ", options: { bold: true, fontSize: 13, breakLine: true } },
  { text: "   dengan total downtime 43 jam selama 2022-2026. Keausan disc menyebabkan internal leakage dan kebocoran packing gland mengurangi volume fluida pendingin.\n\n", options: { fontSize: 12, breakLine: true } },
  
  { text: "4. Prioritas penanganan: ", options: { bold: true, fontSize: 13, breakLine: true } },
  { text: "   Keausan Disc (RPN 200), Kebocoran Packing Gland (RPN 168), dan Korosi Body Valve (RPN 135).\n\n", options: { fontSize: 12, breakLine: true } },
  
  { text: "5. Metode FMEA terbukti efektif ", options: { bold: true, fontSize: 13, breakLine: true } },
  { text: "   untuk identifikasi sistematis, penilaian risiko terukur, dan penentuan prioritas perbaikan berbasis data.", options: { fontSize: 12 } }
], {
  x: 0.5, y: 1.0, w: 9, h: 4.0,
  fontSize: 12, color: colors.dark,
  fontFace: "Arial", lineSpacing: 20
});

// === SLIDE 14: SARAN ===
let slide14 = pres.addSlide();
slide14.background = { color: colors.white };

slide14.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.6,
  fill: { color: colors.primary }
});

slide14.addText("SARAN", {
  x: 0.5, y: 0.15, w: 9, h: 0.3,
  fontSize: 24, bold: true, color: colors.white,
  fontFace: "Arial", margin: 0
});

// Left column - For Company
slide14.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.0, w: 4.3, h: 3.8,
  fill: { color: "F8F9FA" },
  line: { color: colors.secondary, width: 2 }
});

slide14.addText("UNTUK PIHAK KAPAL", {
  x: 0.7, y: 1.15, w: 3.9, h: 0.35,
  fontSize: 14, bold: true, color: colors.secondary,
  fontFace: "Arial"
});

slide14.addText([
  { text: "• Overhaul total Gate Valve ", options: { bold: true } },
  { text: "saat docking berikutnya\n\n", options: { breakLine: true } },
  
  { text: "• Jadwal perawatan ketat: ", options: { bold: true } },
  { text: "packing gland 250 jam, disc/seat ring 500 jam\n\n", options: { breakLine: true } },
  
  { text: "• Pelatihan operator ", options: { bold: true } },
  { text: "prosedur operasi valve yang benar\n\n", options: { breakLine: true } },
  
  { text: "• Gunakan material marine grade ", options: { bold: true } },
  { text: "untuk grease dan cat anti-korosi", options: {} }
], {
  x: 0.8, y: 1.65, w: 3.7, h: 3.0,
  fontSize: 11, color: colors.dark,
  fontFace: "Arial", lineSpacing: 18
});

// Right column - For Research
slide14.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.0, w: 4.3, h: 3.8,
  fill: { color: "F8F9FA" },
  line: { color: colors.accent, width: 2 }
});

slide14.addText("UNTUK PENELITIAN LANJUTAN", {
  x: 5.4, y: 1.15, w: 3.9, h: 0.35,
  fontSize: 14, bold: true, color: colors.accent,
  fontFace: "Arial"
});

slide14.addText([
  { text: "• Pengujian material laboratorium ", options: { bold: true } },
  { text: "dan simulasi tegangan (ANSYS/SolidWorks)\n\n", options: { breakLine: true } },
  
  { text: "• Analisis komponen lain ", options: { bold: true } },
  { text: "dalam cooling water system (pompa, cooler, strainer)\n\n", options: { breakLine: true } },
  
  { text: "• Studi komparatif ", options: { bold: true } },
  { text: "material valve berbeda untuk lingkungan laut\n\n", options: { breakLine: true } },
  
  { text: "• Implementasi IoT ", options: { bold: true } },
  { text: "untuk monitoring kondisi valve real-time", options: {} }
], {
  x: 5.4, y: 1.65, w: 3.9, h: 3.0,
  fontSize: 11, color: colors.dark,
  fontFace: "Arial", lineSpacing: 18
});

// === SLIDE 15: CLOSING ===
let slide15 = pres.addSlide();
slide15.background = { color: colors.primary };

slide15.addText("TERIMA KASIH", {
  x: 0.5, y: 1.8, w: 9, h: 0.8,
  fontSize: 40, bold: true, color: colors.white,
  align: "center", fontFace: "Arial"
});

slide15.addShape(pres.shapes.RECTANGLE, {
  x: 3.5, y: 2.8, w: 3, h: 0.05,
  fill: { color: colors.accent }
});

slide15.addText([
  { text: "Muhammad Adib Nor\n", options: { fontSize: 18, bold: true, breakLine: true } },
  { text: "C2A023068\n\n", options: { fontSize: 16, breakLine: true } },
  { text: "Program Studi S1 Teknik Mesin\n", options: { fontSize: 14, breakLine: true } },
  { text: "Universitas Muhammadiyah Semarang", options: { fontSize: 14 } }
], {
  x: 0.5, y: 3.1, w: 9, h: 1.2,
  color: colors.light, align: "center", fontFace: "Arial"
});

slide15.addText("Seminar Kerja Praktik - 2026", {
  x: 0.5, y: 4.8, w: 9, h: 0.4,
  fontSize: 13, color: colors.light, italic: true,
  align: "center", fontFace: "Arial"
});

// Write file
pres.writeFile({ fileName: "/home/claude/Seminar_KP_Gate_Valve.pptx" });
console.log("✅ Presentasi berhasil dibuat!");