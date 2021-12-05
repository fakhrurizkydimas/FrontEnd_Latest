const dummyFiles = [
  {
    id:1,
    name: 'Formulir Permohonan Layanan Site-To-Site VPN',
    fileUrl:'https://bukopinonline.sharepoint.com/sites/GTIWiki/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FGTIWiki%2FShared%20Documents%2FFormulir%20PPTI%2FFormulir%20Permohonan%20Layanan%20Site%2DTo%2DSite%20VPN%2Epdf&parent=%2Fsites%2FGTIWiki%2FShared%20Documents%2FFormulir%20PPTI&p=true'
  },
  {
    id:2,
    name: 'Formulir Permohonan Layanan Teleworking',
    fileUrl:'https://bukopinonline.sharepoint.com/sites/GTIWiki/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FGTIWiki%2FShared%20Documents%2FFormulir%20PPTI%2FFormulir%20Permohonan%20Layanan%20Teleworking%2Epdf&parent=%2Fsites%2FGTIWiki%2FShared%20Documents%2FFormulir%20PPTI&p=true'
  },
  {
    id:3,
    name: 'Formulir Removable Media',
    fileUrl:'https://bukopinonline.sharepoint.com/sites/GTIWiki/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FGTIWiki%2FShared%20Documents%2FFormulir%20PPTI%2FFormulir%20Removable%20Media%2Epdf&parent=%2Fsites%2FGTIWiki%2FShared%20Documents%2FFormulir%20PPTI&p=true'
  },
  {
    id:4,
    name: 'Formulir Persetujuan Peminjaman Aset TI Bank Bukopin',
    fileUrl:'https://bukopinonline.sharepoint.com/sites/GTIWiki/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FGTIWiki%2FShared%20Documents%2FFormulir%20PPTI%2FFormulir%20Persetujuan%20Peminjaman%20Aset%20TI%20Bank%20Bukopin%2Epdf&parent=%2Fsites%2FGTIWiki%2FShared%20Documents%2FFormulir%20PPTI&p=true'
  },
  {
    id:5,
    name: 'Formulir Firewall Management Rules',
    fileUrl:'https://bukopinonline.sharepoint.com/sites/GTIWiki/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FGTIWiki%2FShared%20Documents%2FFormulir%20PPTI%2FFormulir%20Firewall%20Management%20Rules%2Epdf&parent=%2Fsites%2FGTIWiki%2FShared%20Documents%2FFormulir%20PPTI&p=true'
  },
  {
    id:6,
    name: 'Formulir Business Impact Analysis (BIA)',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:7,
    name: 'Formulir Request For Change (RFC)',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:8,
    name: 'Formulir Request For Change - Dokumen (RFC-D)',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:9,
    name: 'Formulir User Requirement Term of Reference Checklist (UTFC)',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:10,
    name: 'Formulir Release Plan',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:11,
    name: 'Formulir Rollout Request (RR)',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:12,
    name: 'Formulir Rollout Request Response (RRR)',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:13,
    name: 'Formulir Permintaan Pembukaan-Penutupan Rekening Testing',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:14,
    name: 'Formulir Permintaan Pembukaan-Penutupan User Pra TO',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:15,
    name: 'Formulir Permintaan Source Code',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:16,
    name: 'Formulir Pelaksanaan Backup Source Code',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:17,
    name: 'Formulir Standar Konfigurasi Keamanan Sistem Operasi Windows Server 2003',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:18,
    name: 'Formulir Standar Konfigurasi Keamanan Sistem Operasi Windows XP (Desktop, Laptop)',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:19,
    name: 'Formulir Standar Konfigurasi Keamanan Sistem Operasi Unix',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:20,
    name: 'FFormulir Standar Konfigurasi Keamanan Sistem Operasi Linux',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:21,
    name: 'Formulir Standar Konfigurasi Perangkat Cisco',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:22,
    name: 'Formulir Standar Konfigurasi Keamanan Sistem Operasi Windows Server 2008',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:23,
    name: 'Formulir Standar Konfigurasi  Perangkat Wireless Access Point',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:24,
    name: 'Formulir Standar Konfigurasi  Keamanan Sistem Operasi Mac OS X (Laptop)',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:25,
    name: 'Formulir Standar Konfigurasi  Keamanan Sistem Operasi Windows 7 (Desktop, Laptop)',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:26,
    name: 'Formulir Standar Konfigurasi  Keamanan Sistem Operasi IBM AS400 (i5_OS)',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:27,
    name: 'Formulir User Requirement Form (UR Form)',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:28,
    name: 'Template Business Requirement Definition (BRD)',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:29,
    name: 'Template Functional Specification Design (FSD)',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:30,
    name: 'Template Project Charter (PC) Inhouse',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:31,
    name: 'Template Project Charter (PC) Outsource',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:32,
    name: 'Template Project Post Implementation Review (PIR)',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:33,
    name: 'Template Rollout Implementation Plan',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:34,
    name: 'Template System Internal Test (SIT)',
    fileUrl:'/files/dummy.pdf'
  },
  {
    id:35,
    name: 'Template User Acceptance Test (UAT)',
    fileUrl:'/files/dummy.pdf'
  },
];
  
  const Books = [
    {
      'id' : 1,
      'name' : 'book-1',
      'title' : 'Book 1'
    },
    {
      'id' : 2,
      'name' : 'book-2',
      'title' : 'Book 2'
    },
    {
      'id' : 3,
      'name' : 'book-3',
      'title' : 'Book 3'
    },
    {
      'id' : 4,
      'name' : 'book-4',
      'title' : 'Book 4'
    },
    {
      'id' : 5,
      'name' : 'book-5',
      'title' : 'Book 5'
    },
  ];
  
  export {
    dummyFiles,
    Books
  }
  