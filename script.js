const slots = [
  { period: 1, time: '07:00-07:50' },
  { period: 2, time: '07:50-08:40' },
  { period: 3, time: '09:00-09:50' },
  { period: 4, time: '09:50-10:40' },
  { period: 5, time: '10:40-11:30' },
  { period: 6, time: '13:00-13:50' },
  { period: 7, time: '13:50-14:40' },
  { period: 8, time: '15:00-15:50' },
  { period: 9, time: '15:50-16:40' },
  { period: 10, time: '16:40-17:30' },
  { period: 11, time: '17:40-18:30' },
  { period: 12, time: '18:30-19:20' },
  { period: 13, time: '19:20-20:10' }
];

// Danh sách môn học chi tiết
const subjects = [
  {
    id: 1,
    name: 'Cơ sở văn hóa Việt Nam',
    code: '003002',
    credits: 3,
    classes: [
      { group: '01', quota: '0/80', teacher: 'GV Nguyễn Ngọc Thiên Tú', day: 'Thứ 2', startPeriod: 1, periods: 4, room: 'Ph 2.A202' },
      { group: '02', quota: '0/80', teacher: 'GV Nguyễn Ngọc Thiên Tú', day: 'Thứ 2', startPeriod: 3, periods: 3, room: 'Ph 2.A202' }
    ]
  },
  {
    id: 2,
    name: 'Lịch sử thế giới hiện đại',
    code: '003507',
    credits: 2,
    classes: [
      { group: '01', quota: '25/40', teacher: 'GV Lê Văn A', day: 'Thứ 3', startPeriod: 2, periods: 3, room: 'Ph 1.B101' }
    ]
  },
  {
    id: 3,
    name: 'Đạo tạo tuyến tính',
    code: '003507',
    credits: 3,
    classes: [
      { group: '01', quota: '30/50', teacher: 'GV Trần Thị B', day: 'Thứ 4', startPeriod: 1, periods: 4, room: 'Ph 3.C202' }
    ]
  },
  {
    id: 4,
    name: 'Phương pháp nghiên cứu khoa học lịch sử',
    code: '003526',
    credits: 2,
    classes: [
      { group: '01', quota: '20/35', teacher: 'GV Hoàng Minh C', day: 'Thứ 5', startPeriod: 3, periods: 2, room: 'Ph 1.D303' }
    ]
  },
  {
    id: 5,
    name: 'Ứng dụng công nghệ thông tin',
    code: '003614',
    credits: 3,
    classes: [
      { group: '01', quota: '40/60', teacher: 'GV Phan Quốc D', day: 'Thứ 2', startPeriod: 6, periods: 3, room: 'Lab 4.E501' },
      { group: '02', quota: '35/60', teacher: 'GV Phan Quốc D', day: 'Thứ 3', startPeriod: 6, periods: 3, room: 'Lab 4.E502' }
    ]
  },
  {
    id: 6,
    name: 'Triết học Mác - Lênin',
    code: '003001',
    credits: 2,
    classes: [
      { group: '01', quota: '15/40', teacher: 'GV Võ Thị E', day: 'Thứ 4', startPeriod: 8, periods: 2, room: 'Ph 2.F404' }
    ]
  },
  {
    id: 7,
    name: 'Đại cương về Pháp luật',
    code: '001234',
    credits: 2,
    classes: [
      { group: '01', quota: '28/50', teacher: 'GV Ngô Văn F', day: 'Thứ 6', startPeriod: 1, periods: 3, room: 'Ph 1.G505' }
    ]
  },
  {
    id: 8,
    name: 'Tiếng Anh cơ bản',
    code: '002001',
    credits: 3,
    classes: [
      { group: '01', quota: '22/45', teacher: 'GV Lý Hải G', day: 'Thứ 2', startPeriod: 9, periods: 4, room: 'Ph 2.H606' },
      { group: '02', quota: '30/45', teacher: 'GV Lý Hải G', day: 'Thứ 5', startPeriod: 6, periods: 4, room: 'Ph 2.H607' }
    ]
  },
  {
    id: 9,
    name: 'Tin học ứng dụng',
    code: '002502',
    credits: 2,
    classes: [
      { group: '01', quota: '18/30', teacher: 'GV Đinh Minh H', day: 'Thứ 3', startPeriod: 11, periods: 2, room: 'Lab 3.I708' }
    ]
  },
  {
    id: 10,
    name: 'Giáo dục thế chế',
    code: '003100',
    credits: 1,
    classes: [
      { group: '01', quota: '50/80', teacher: 'GV Bùi Tuấn I', day: 'Thứ 7', startPeriod: 1, periods: 2, room: 'Hội trường' }
    ]
  },
  {
    id: 11,
    name: 'Anh văn tài chính ngân hàng',
    code: '842025',
    credits: 3,
    classes: [
      { group: '01', quota: '0/80', teacher: 'GV Nguyễn Ngọc Thiên Tú', day: 'Thứ 2', startPeriod: 1, periods: 4, room: 'Ph 2.A202', weeks: '7, 8, 9, 10, 11' },
      { group: '01', quota: '0/80', teacher: 'GV Nguyễn Ngọc Thiên Tú', day: 'Thứ 2', startPeriod: 1, periods: 3, room: 'Ph 2.A202', weeks: '12' },
      { group: '01', quota: '0/80', teacher: 'GV Nguyễn Ngọc Thiên Tú', day: 'Thứ 3', startPeriod: 1, periods: 4, room: 'Ph 2.B203', weeks: '7, 8, 9, 10, 11' },
      { group: '01', quota: '0/80', teacher: 'GV Nguyễn Ngọc Thiên Tú', day: 'Thứ 3', startPeriod: 1, periods: 2, room: 'Ph 2.B203', weeks: '12' }
    ]
  },
  {
    id: 12,
    name: 'Kế toán tài chính',
    code: '842301',
    credits: 3,
    classes: [
      { group: '01', quota: '0/100', teacher: 'Lê Thị Bảo Như', day: 'Thứ 2', startPeriod: 9, periods: 2, room: 'C.B108', weeks: '3, 4, 5, 6, 7' },
      { group: '01', quota: '0/100', teacher: 'Lê Thị Bảo Như', day: 'Thứ 2', startPeriod: 9, periods: 2, room: 'C.B108', weeks: '8' },
      { group: '01', quota: '0/100', teacher: 'Lê Thị Bảo Như', day: 'Thứ 4', startPeriod: 8, periods: 3, room: '2.B304', weeks: '3, 4, 5, 6, 7' },
      { group: '01', quota: '0/100', teacher: 'Lê Thị Bảo Như', day: 'Thứ 5', startPeriod: 6, periods: 3, room: '2.C006', weeks: '3, 4, 5, 6, 7' },
      { group: '01', quota: '0/100', teacher: 'Lê Thị Bảo Như', day: 'Thứ 5', startPeriod: 6, periods: 3, room: '2.C006', weeks: '8' },

      { group: '02', quota: '0/100', teacher: 'Hồ Xuân Hữu', day: 'Thứ 2', startPeriod: 9, periods: 2, room: '2.C006', weeks: '3, 4, 5, 6, 7' },
      { group: '02', quota: '0/100', teacher: 'Hồ Xuân Hữu', day: 'Thứ 2', startPeriod: 9, periods: 2, room: '2.C006', weeks: '8' },
      { group: '02', quota: '0/100', teacher: 'Hồ Xuân Hữu', day: 'Thứ 3', startPeriod: 6, periods: 3, room: '2.C006', weeks: '3, 4, 5, 6, 7' },
      { group: '02', quota: '0/100', teacher: 'Hồ Xuân Hữu', day: 'Thứ 3', startPeriod: 6, periods: 3, room: '2.B202', weeks: '8' },
      { group: '02', quota: '0/100', teacher: 'Hồ Xuân Hữu', day: 'Thứ 6', startPeriod: 6, periods: 3, room: '2.C006', weeks: '3, 4, 5, 6, 7' },

      { group: '03', quota: '0/100', teacher: 'Hồ Xuân Hữu', day: 'Thứ 2', startPeriod: 6, periods: 3, room: '2.B303', weeks: '3, 4, 5, 6, 7' },
      { group: '03', quota: '0/100', teacher: 'Hồ Xuân Hữu', day: 'Thứ 2', startPeriod: 6, periods: 3, room: '2.B303', weeks: '8' },
      { group: '03', quota: '0/100', teacher: 'Hồ Xuân Hữu', day: 'Thứ 4', startPeriod: 9, periods: 2, room: '2.C006', weeks: '3, 4, 5, 6, 7' },
      { group: '03', quota: '0/100', teacher: 'Hồ Xuân Hữu', day: 'Thứ 4', startPeriod: 9, periods: 2, room: '2.C006', weeks: '8' },
      { group: '03', quota: '0/100', teacher: 'Hồ Xuân Hữu', day: 'Thứ 5', startPeriod: 8, periods: 3, room: '2.A104', weeks: '3, 4, 5, 6, 7' },

      { group: '04', quota: '0/100', teacher: 'Hồ Xuân Hữu', day: 'Thứ 2', startPeriod: 3, periods: 3, room: '2.A104', weeks: '3, 4, 5, 6, 7' },
      { group: '04', quota: '0/100', teacher: 'Hồ Xuân Hữu', day: 'Thứ 2', startPeriod: 3, periods: 3, room: '2.A104', weeks: '8' },
      { group: '04', quota: '0/100', teacher: 'Hồ Xuân Hữu', day: 'Thứ 3', startPeriod: 4, periods: 2, room: '2.B301', weeks: '3, 4, 5, 6, 7' },
      { group: '04', quota: '0/100', teacher: 'Hồ Xuân Hữu', day: 'Thứ 3', startPeriod: 4, periods: 2, room: '2.B301', weeks: '8' },
      { group: '04', quota: '0/100', teacher: 'Hồ Xuân Hữu', day: 'Thứ 5', startPeriod: 3, periods: 3, room: '2.C006', weeks: '3, 4, 5, 6, 7' },

      { group: '05', quota: '0/100', teacher: 'Hồ Xuân Hữu', day: 'Thứ 3', startPeriod: 9, periods: 2, room: '2.A202', weeks: '3, 4, 5, 6, 7' },
      { group: '05', quota: '0/100', teacher: 'Hồ Xuân Hữu', day: 'Thứ 3', startPeriod: 9, periods: 2, room: '2.A202', weeks: '8' },
      { group: '05', quota: '0/100', teacher: 'Hồ Xuân Hữu', day: 'Thứ 4', startPeriod: 6, periods: 3, room: '2.A202', weeks: '3, 4, 5, 6, 7' },
      { group: '05', quota: '0/100', teacher: 'Hồ Xuân Hữu', day: 'Thứ 4', startPeriod: 6, periods: 3, room: '2.A202', weeks: '8' },
      { group: '05', quota: '0/100', teacher: 'Hồ Xuân Hữu', day: 'Thứ 6', startPeriod: 3, periods: 3, room: '2.A104', weeks: '3, 4, 5, 6, 7' }
    ]
  },
  {
    id: 13,
    name: 'Hệ thống thông tin tài chính',
    code: '842008',
    credits: 3,
    classes: [
      { group: '01', quota: '0/60', teacher: 'Nguyễn Thị Ngọc Tú', day: 'Thứ 2', startPeriod: 1, periods: 3, room: '1.A016', weeks: '3, 4, 5, 6, 7' },
      { group: '01', quota: '0/60', teacher: 'Nguyễn Thị Ngọc Tú', day: 'Thứ 3', startPeriod: 1, periods: 2, room: '1.A016', weeks: '3, 4, 5, 6, 7' },
      { group: '01', quota: '0/60', teacher: 'Nguyễn Thị Ngọc Tú', day: 'Thứ 3', startPeriod: 1, periods: 2, room: '1.A016', weeks: '8' },
      { group: '01', quota: '0/60', teacher: 'Nguyễn Thị Ngọc Tú', day: 'Thứ 5', startPeriod: 1, periods: 3, room: '1.A016', weeks: '3, 4, 5, 6, 7' },
      { group: '01', quota: '0/60', teacher: 'Nguyễn Thị Ngọc Tú', day: 'Thứ 5', startPeriod: 1, periods: 3, room: '1.A016', weeks: '8' },

      { group: '02', quota: '0/60', teacher: 'Nguyễn Thị Ngọc Tú', day: 'Thứ 3', startPeriod: 3, periods: 3, room: '1.A016', weeks: '3, 4, 5, 6, 7' },
      { group: '02', quota: '0/60', teacher: 'Nguyễn Thị Ngọc Tú', day: 'Thứ 4', startPeriod: 6, periods: 3, room: '1.A015', weeks: '3, 4, 5, 6, 7' },
      { group: '02', quota: '0/60', teacher: 'Nguyễn Thị Ngọc Tú', day: 'Thứ 4', startPeriod: 6, periods: 3, room: '1.A015', weeks: '8' },
      { group: '02', quota: '0/60', teacher: 'Nguyễn Thị Ngọc Tú', day: 'Thứ 5', startPeriod: 4, periods: 2, room: '1.A016', weeks: '3, 4, 5, 6, 7' },
      { group: '02', quota: '0/60', teacher: 'Nguyễn Thị Ngọc Tú', day: 'Thứ 5', startPeriod: 4, periods: 2, room: '1.A016', weeks: '8' }
    ]
  },
  {
    id: 14,
    name: 'Hệ thống thông tin ngân hàng',
    code: '842009',
    credits: 3,
    classes: [
      { group: '01', quota: '0/60', teacher: 'Phạm Duy Tính', day: 'Thứ 3', startPeriod: 8, periods: 3, room: '1.A016', weeks: '3, 4, 5, 6, 7' },
      { group: '01', quota: '0/60', teacher: 'Phạm Duy Tính', day: 'Thứ 4', startPeriod: 1, periods: 2, room: '1.A015', weeks: '3, 4, 5, 6, 7' },
      { group: '01', quota: '0/60', teacher: 'Phạm Duy Tính', day: 'Thứ 4', startPeriod: 1, periods: 2, room: '1.A015', weeks: '8' },
      { group: '01', quota: '0/60', teacher: 'Phạm Duy Tính', day: 'Thứ 6', startPeriod: 8, periods: 3, room: '1.A016', weeks: '3, 4, 5, 6, 7' },
      { group: '01', quota: '0/60', teacher: 'Phạm Duy Tính', day: 'Thứ 6', startPeriod: 8, periods: 3, room: '1.A016', weeks: '8' },

      { group: '02', quota: '0/60', teacher: 'Phạm Duy Tính', day: 'Thứ 2', startPeriod: 1, periods: 3, room: '1.A015', weeks: '3, 4, 5, 6, 7' },
      { group: '02', quota: '0/60', teacher: 'Phạm Duy Tính', day: 'Thứ 2', startPeriod: 1, periods: 3, room: '1.A015', weeks: '8' },
      { group: '02', quota: '0/60', teacher: 'Phạm Duy Tính', day: 'Thứ 4', startPeriod: 9, periods: 2, room: '1.A015', weeks: '3, 4, 5, 6, 7' },
      { group: '02', quota: '0/60', teacher: 'Phạm Duy Tính', day: 'Thứ 4', startPeriod: 9, periods: 2, room: '1.A015', weeks: '8' },
      { group: '02', quota: '0/60', teacher: 'Phạm Duy Tính', day: 'Thứ 5', startPeriod: 6, periods: 3, room: '1.A015', weeks: '3, 4, 5, 6, 7' }
    ]
  },
  {
    id: 15,
    name: 'Công nghệ tài chính',
    code: '842502',
    credits: 3,
    classes: [
      { group: '01', quota: '0/100', teacher: 'Đặng Bửu Kiêm', day: 'Thứ 2', startPeriod: 6, periods: 3, room: 'C.B108', weeks: '3, 4, 5, 6, 7' },
      { group: '01', quota: '0/100', teacher: 'Đặng Bửu Kiêm', day: 'Thứ 2', startPeriod: 6, periods: 3, room: 'C.B108', weeks: '8' },
      { group: '01', quota: '0/100', teacher: 'Đặng Bửu Kiêm', day: 'Thứ 5', startPeriod: 9, periods: 2, room: '2.C006', weeks: '3, 4, 5, 6, 7' },
      { group: '01', quota: '0/100', teacher: 'Đặng Bửu Kiêm', day: 'Thứ 6', startPeriod: 1, periods: 3, room: '2.C006', weeks: '3, 4, 5, 6, 7' },
      { group: '01', quota: '0/100', teacher: 'Đặng Bửu Kiêm', day: 'Thứ 6', startPeriod: 1, periods: 2, room: '2.C006', weeks: '8' }
    ]
  },
  {
    id: 16,
    name: 'Lịch sử Đảng Cộng sản Việt Nam',
    code: '861305',
    credits: 2,
    classes: [
      { group: '01', quota: '0/100', teacher: 'Phạm Phúc Vinh', day: 'Thứ 3', startPeriod: 4, periods: 2, room: 'C.E301', weeks: '7, 8, 9, 10, 11, 12' },
      { group: '01', quota: '0/100', teacher: 'Phạm Phúc Vinh', day: 'Thứ 4', startPeriod: 3, periods: 3, room: 'C.E001', weeks: '7, 8, 9, 10, 11, 12' },

      { group: '02', quota: '0/100', teacher: 'Mai Thúc Hiệp', day: 'Thứ 2', startPeriod: 8, periods: 3, room: '1.B001', weeks: '7, 8, 9, 10, 11, 12' },
      { group: '02', quota: '0/100', teacher: 'Mai Thúc Hiệp', day: 'Thứ 6', startPeriod: 4, periods: 2, room: 'C.E603', weeks: '7, 8, 9, 10, 11, 12' },

      { group: '03', quota: '0/100', teacher: 'Mai Thúc Hiệp', day: 'Thứ 3', startPeriod: 6, periods: 2, room: 'C.E603', weeks: '1, 2, 3' },
      { group: '03', quota: '0/100', teacher: 'Mai Thúc Hiệp', day: 'Thứ 3', startPeriod: 6, periods: 2, room: 'C.E603', weeks: '6, 7, 8' },
      { group: '03', quota: '0/100', teacher: 'Mai Thúc Hiệp', day: 'Thứ 6', startPeriod: 6, periods: 3, room: '1.A101', weeks: '1, 2, 3' },
      { group: '03', quota: '0/100', teacher: 'Mai Thúc Hiệp', day: 'Thứ 6', startPeriod: 6, periods: 3, room: '1.A101', weeks: '6, 7, 8' },

      { group: '04', quota: '0/100', teacher: 'Mai Thúc Hiệp', day: 'Thứ 2', startPeriod: 4, periods: 2, room: '1.B101', weeks: '1, 2, 3' },
      { group: '04', quota: '0/100', teacher: 'Mai Thúc Hiệp', day: 'Thứ 2', startPeriod: 4, periods: 2, room: '1.B101', weeks: '6, 7, 8' },
      { group: '04', quota: '0/100', teacher: 'Mai Thúc Hiệp', day: 'Thứ 6', startPeriod: 1, periods: 3, room: 'C.B109', weeks: '1, 2, 3' },
      { group: '04', quota: '0/100', teacher: 'Mai Thúc Hiệp', day: 'Thứ 6', startPeriod: 1, periods: 3, room: 'C.B109', weeks: '6, 7, 8' },

      { group: '05', quota: '0/100', teacher: 'Mai Thúc Hiệp', day: 'Thứ 4', startPeriod: 1, periods: 3, room: 'C.E201', weeks: '1, 2, 3' },
      { group: '05', quota: '0/100', teacher: 'Mai Thúc Hiệp', day: 'Thứ 4', startPeriod: 1, periods: 3, room: 'C.E201', weeks: '6, 7, 8' },
      { group: '05', quota: '0/100', teacher: 'Mai Thúc Hiệp', day: 'Thứ 6', startPeriod: 9, periods: 2, room: '1.A202', weeks: '1, 2, 3' },
      { group: '05', quota: '0/100', teacher: 'Mai Thúc Hiệp', day: 'Thứ 6', startPeriod: 9, periods: 2, room: '1.A202', weeks: '6, 7, 8' },

      { group: '06', quota: '0/100', teacher: 'Mai Thúc Hiệp', day: 'Thứ 3', startPeriod: 8, periods: 3, room: 'C.A102', weeks: '1, 2, 3' },
      { group: '06', quota: '0/100', teacher: 'Mai Thúc Hiệp', day: 'Thứ 3', startPeriod: 8, periods: 3, room: 'C.A102', weeks: '6, 7, 8' },
      { group: '06', quota: '0/100', teacher: 'Mai Thúc Hiệp', day: 'Thứ 4', startPeriod: 4, periods: 2, room: 'C.C105', weeks: '1, 2, 3' },
      { group: '06', quota: '0/100', teacher: 'Mai Thúc Hiệp', day: 'Thứ 4', startPeriod: 4, periods: 2, room: 'C.C105', weeks: '6, 7, 8' },

      { group: '07', quota: '0/100', teacher: 'Phạm Văn Phương', day: 'Thứ 2', startPeriod: 1, periods: 2, room: 'C.C102', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '07', quota: '0/100', teacher: 'Phạm Văn Phương', day: 'Thứ 6', startPeriod: 3, periods: 3, room: 'C.E301', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '08', quota: '0/100', teacher: 'Phạm Văn Phương', day: 'Thứ 2', startPeriod: 6, periods: 2, room: 'C.E301', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '08', quota: '0/100', teacher: 'Phạm Văn Phương', day: 'Thứ 3', startPeriod: 3, periods: 3, room: 'C.E304', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '09', quota: '0/100', teacher: 'Phạm Văn Phương', day: 'Thứ 3', startPeriod: 6, periods: 3, room: 'C.E301', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '09', quota: '0/100', teacher: 'Phạm Văn Phương', day: 'Thứ 5', startPeriod: 4, periods: 2, room: 'C.E304', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '10', quota: '0/100', teacher: 'Phạm Văn Phương', day: 'Thứ 2', startPeriod: 3, periods: 3, room: 'C.E301', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '10', quota: '0/100', teacher: 'Phạm Văn Phương', day: 'Thứ 4', startPeriod: 4, periods: 2, room: 'C.E301', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '11', quota: '0/100', teacher: 'Phạm Văn Phương', day: 'Thứ 3', startPeriod: 1, periods: 2, room: 'C.E502', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '11', quota: '0/100', teacher: 'Phạm Văn Phương', day: 'Thứ 5', startPeriod: 6, periods: 3, room: 'C.C102', weeks: '3, 4, 5, 6, 7, 8' }
    ]
  },
  {
    id: 17,
    name: 'Tư tưởng Hồ Chí Minh',
    code: '861304',
    credits: 2,
    classes: [
      { group: '01', quota: '0/100', teacher: 'Phạm Phúc Vinh', day: 'Thứ 2', startPeriod: 1, periods: 3, room: 'C.E001', weeks: '7, 8, 9, 10, 11, 12' },
      { group: '01', quota: '0/100', teacher: 'Phạm Phúc Vinh', day: 'Thứ 4', startPeriod: 1, periods: 2, room: 'C.E301', weeks: '7, 8, 9, 10, 11, 12' },

      { group: '02', quota: '0/100', teacher: 'Phạm Phúc Vinh', day: 'Thứ 4', startPeriod: 6, periods: 3, room: 'C.B107', weeks: '7, 8, 9, 10, 11, 12' },
      { group: '02', quota: '0/100', teacher: 'Phạm Phúc Vinh', day: 'Thứ 6', startPeriod: 1, periods: 2, room: 'C.E603', weeks: '7, 8, 9, 10, 11, 12' },

      { group: '03', quota: '0/100', teacher: 'Huỳnh Thị Kim Quyên', day: 'Thứ 4', startPeriod: 8, periods: 3, room: '2.B202', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '03', quota: '0/100', teacher: 'Huỳnh Thị Kim Quyên', day: 'Thứ 6', startPeriod: 9, periods: 2, room: 'C.E502', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '04', quota: '0/100', teacher: 'Huỳnh Thị Kim Quyên', day: 'Thứ 2', startPeriod: 4, periods: 2, room: '2.B202', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '04', quota: '0/100', teacher: 'Huỳnh Thị Kim Quyên', day: 'Thứ 5', startPeriod: 3, periods: 3, room: 'C.E603', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '05', quota: '0/100', teacher: 'Huỳnh Thị Kim Quyên', day: 'Thứ 5', startPeriod: 8, periods: 2, room: 'C.E503', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '05', quota: '0/100', teacher: 'Huỳnh Thị Kim Quyên', day: 'Thứ 6', startPeriod: 6, periods: 3, room: 'C.E603', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '06', quota: '0/100', teacher: 'Huỳnh Thị Kim Quyên', day: 'Thứ 4', startPeriod: 1, periods: 3, room: '2.A201', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '06', quota: '0/100', teacher: 'Huỳnh Thị Kim Quyên', day: 'Thứ 5', startPeriod: 6, periods: 2, room: 'C.E603', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '07', quota: '0/100', teacher: 'Phạm Văn Phương', day: 'Thứ 4', startPeriod: 6, periods: 2, room: '2.B004', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '07', quota: '0/100', teacher: 'Phạm Văn Phương', day: 'Thứ 6', startPeriod: 1, periods: 3, room: 'C.E001', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '08', quota: '0/100', teacher: 'Phạm Văn Phương', day: 'Thứ 2', startPeriod: 1, periods: 3, room: '2.B202', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '08', quota: '0/100', teacher: 'Phạm Văn Phương', day: 'Thứ 4', startPeriod: 4, periods: 2, room: '2.A201', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '09', quota: '0/100', teacher: 'Phạm Văn Phương', day: 'Thứ 2', startPeriod: 8, periods: 3, room: 'C.E603', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '09', quota: '0/100', teacher: 'Phạm Văn Phương', day: 'Thứ 6', startPeriod: 4, periods: 2, room: 'C.C103', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '10', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 4', startPeriod: 6, periods: 2, room: 'C.C102', weeks: '1, 2, 3' },
      { group: '10', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 4', startPeriod: 6, periods: 2, room: 'C.C102', weeks: '6, 7, 8' },
      { group: '10', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 6', startPeriod: 1, periods: 3, room: 'C.E304', weeks: '1, 2, 3' },
      { group: '10', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 6', startPeriod: 1, periods: 3, room: 'C.E304', weeks: '6, 7, 8' },

      { group: '11', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 2', startPeriod: 3, periods: 3, room: 'C.C102', weeks: '1, 2, 3' },
      { group: '11', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 2', startPeriod: 3, periods: 3, room: 'C.C102', weeks: '6, 7, 8' },
      { group: '11', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 3', startPeriod: 6, periods: 2, room: '2.A201', weeks: '1, 2, 3' },
      { group: '11', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 3', startPeriod: 6, periods: 2, room: '2.A201', weeks: '6, 7, 8' },

      { group: '12', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 3', startPeriod: 1, periods: 2, room: '2.A201', weeks: '1, 2, 3' },
      { group: '12', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 3', startPeriod: 1, periods: 2, room: '2.A201', weeks: '6, 7, 8' },
      { group: '12', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 6', startPeriod: 6, periods: 3, room: '1.B001', weeks: '1, 2, 3' },
      { group: '12', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 6', startPeriod: 6, periods: 3, room: '1.B001', weeks: '6, 7, 8' },

      { group: '13', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 3', startPeriod: 3, periods: 3, room: '2.A201', weeks: '1, 2, 3' },
      { group: '13', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 3', startPeriod: 3, periods: 3, room: '2.A201', weeks: '6, 7, 8' },
      { group: '13', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 6', startPeriod: 9, periods: 2, room: '1.A101', weeks: '1, 2, 3' },
      { group: '13', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 6', startPeriod: 9, periods: 2, room: '1.A101', weeks: '6, 7, 8' },

      { group: '14', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 2', startPeriod: 8, periods: 3, room: 'C.E205', weeks: '1, 2, 3' },
      { group: '14', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 2', startPeriod: 8, periods: 3, room: 'C.E205', weeks: '6, 7, 8' },
      { group: '14', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 5', startPeriod: 6, periods: 2, room: '2.A104', weeks: '1, 2, 3' },
      { group: '14', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 5', startPeriod: 6, periods: 2, room: '2.A104', weeks: '6, 7, 8' },

      { group: '15', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 2', startPeriod: 6, periods: 2, room: 'C.C102', weeks: '1, 2, 3' },
      { group: '15', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 2', startPeriod: 6, periods: 2, room: 'C.C102', weeks: '6, 7, 8' },
      { group: '15', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 5', startPeriod: 8, periods: 3, room: '2.A202', weeks: '1, 2, 3' },
      { group: '15', quota: '0/100', teacher: 'Nguyễn Thị Việt Hà', day: 'Thứ 5', startPeriod: 8, periods: 3, room: '2.A202', weeks: '6, 7, 8' }
    ]
  },
  {
    id: 18,
    name: 'Bóng bàn 1',
    code: 'BOBA11',
    credits: 1,
    classes: [
      { group: '01', quota: '0/40', teacher: 'Nguyễn Thị Hoàng Anh', day: 'Thứ 4', startPeriod: 1, periods: 2, room: 'C.BBAN', weeks: '7, 8, 9, 10, 11, 12' },
      { group: '01', quota: '0/40', teacher: 'Nguyễn Thị Hoàng Anh', day: 'Thứ 5', startPeriod: 1, periods: 3, room: 'C.BBAN', weeks: '7, 8, 9, 10, 11, 12' },

      { group: '02', quota: '0/40', teacher: 'Nguyễn Thị Hoàng Anh', day: 'Thứ 2', startPeriod: 1, periods: 2, room: 'C.BBAN', weeks: '1, 2, 3, 4, 5, 6' },
      { group: '02', quota: '0/40', teacher: 'Nguyễn Thị Hoàng Anh', day: 'Thứ 3', startPeriod: 1, periods: 3, room: 'C.BBAN', weeks: '1, 2, 3, 4, 5, 6' },

      { group: '03', quota: '0/40', teacher: 'Nguyễn Thị Hoàng Anh', day: 'Thứ 3', startPeriod: 4, periods: 2, room: 'C.BBAN', weeks: '1, 2, 3, 4, 5, 6' },
      { group: '03', quota: '0/40', teacher: 'Nguyễn Thị Hoàng Anh', day: 'Thứ 5', startPeriod: 1, periods: 3, room: 'C.BBAN', weeks: '1, 2, 3, 4, 5, 6' },

      { group: '04', quota: '0/40', teacher: 'Nguyễn Thị Hoàng Anh', day: 'Thứ 5', startPeriod: 8, periods: 2, room: 'C.BBAN', weeks: '1, 2, 3, 4, 5, 6, 7, 8' },
      { group: '04', quota: '0/40', teacher: 'Nguyễn Thị Hoàng Anh', day: 'Thứ 6', startPeriod: 1, periods: 2, room: 'C.BBAN', weeks: '1, 2, 3, 4, 5, 6, 7, 8' },

      { group: '05', quota: '0/40', teacher: 'Nguyễn Thị Hoàng Anh', day: 'Thứ 2', startPeriod: 6, periods: 2, room: 'C.BBAN', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '05', quota: '0/40', teacher: 'Nguyễn Thị Hoàng Anh', day: 'Thứ 3', startPeriod: 6, periods: 3, room: 'C.BBAN', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '06', quota: '0/40', teacher: 'Đỗ Thụy Hội Uyên', day: 'Thứ 4', startPeriod: 3, periods: 3, room: 'C.BBAN', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '06', quota: '0/40', teacher: 'Đỗ Thụy Hội Uyên', day: 'Thứ 7', startPeriod: 1, periods: 2, room: 'C.BBAN', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '07', quota: '0/40', teacher: 'Đỗ Thụy Hội Uyên', day: 'Thứ 6', startPeriod: 3, periods: 3, room: 'C.BBAN', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '07', quota: '0/40', teacher: 'Đỗ Thụy Hội Uyên', day: 'Thứ 7', startPeriod: 3, periods: 2, room: 'C.BBAN', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '08', quota: '0/40', teacher: 'Đỗ Thụy Hội Uyên', day: 'Thứ 4', startPeriod: 6, periods: 3, room: 'C.BBAN', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '08', quota: '0/40', teacher: 'Đỗ Thụy Hội Uyên', day: 'Thứ 6', startPeriod: 6, periods: 2, room: 'C.BBAN', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '09', quota: '0/40', teacher: 'Đỗ Thụy Hội Uyên', day: 'Thứ 2', startPeriod: 8, periods: 2, room: 'C.BBAN', weeks: '1, 2, 3, 4, 5, 6, 7, 8' },
      { group: '09', quota: '0/40', teacher: 'Đỗ Thụy Hội Uyên', day: 'Thứ 5', startPeriod: 6, periods: 2, room: 'C.BBAN', weeks: '1, 2, 3, 4, 5, 6, 7, 8' }
    ]
  },
  {
    id: 19,
    name: 'Cầu lông 1',
    code: 'CAL011',
    credits: 1,
    classes: [
      { group: '01', quota: '0/40', teacher: 'Nguyễn Đỗ Minh Sơn', day: 'Thứ 3', startPeriod: 2, periods: 4, room: 'C.SCLO2', weeks: '9, 10, 11, 12' },
      { group: '01', quota: '0/40', teacher: 'Nguyễn Đỗ Minh Sơn', day: 'Thứ 5', startPeriod: 2, periods: 4, room: 'C.SCLO2', weeks: '9, 10, 11, 12' },

      { group: '02', quota: '0/40', teacher: 'Nguyễn Đỗ Minh Sơn', day: 'Thứ 3', startPeriod: 6, periods: 4, room: 'C.SCLO2', weeks: '9, 10, 11, 12' },
      { group: '02', quota: '0/40', teacher: 'Nguyễn Đỗ Minh Sơn', day: 'Thứ 5', startPeriod: 6, periods: 4, room: 'C.SCLO1', weeks: '9, 10, 11, 12' },

      { group: '03', quota: '0/40', teacher: 'Nguyễn Đỗ Minh Sơn', day: 'Thứ 2', startPeriod: 8, periods: 2, room: 'C.SCLO1', weeks: '1, 2, 3, 4, 5, 6, 7, 8' },
      { group: '03', quota: '0/40', teacher: 'Nguyễn Đỗ Minh Sơn', day: 'Thứ 6', startPeriod: 1, periods: 2, room: 'C.SCLO1', weeks: '1, 2, 3, 4, 5, 6, 7, 8' },

      { group: '04', quota: '0/40', teacher: 'Đoàn Lê Quế Trân', day: 'Thứ 2', startPeriod: 3, periods: 3, room: 'C.SCLO1', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '04', quota: '0/40', teacher: 'Đoàn Lê Quế Trân', day: 'Thứ 2', startPeriod: 9, periods: 2, room: 'C.SCLO2', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '05', quota: '0/40', teacher: 'Nguyễn Đỗ Minh Sơn', day: 'Thứ 5', startPeriod: 6, periods: 3, room: 'C.SCLO2', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '05', quota: '0/40', teacher: 'Nguyễn Đỗ Minh Sơn', day: 'Thứ 6', startPeriod: 6, periods: 2, room: 'C.SCLO1', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '06', quota: '0/40', teacher: 'Nguyễn Đỗ Minh Sơn', day: 'Thứ 2', startPeriod: 2, periods: 4, room: 'C.SCLO2', weeks: '9, 10, 11, 12' },
      { group: '06', quota: '0/40', teacher: 'Nguyễn Đỗ Minh Sơn', day: 'Thứ 4', startPeriod: 2, periods: 4, room: 'C.SCLO2', weeks: '9, 10, 11, 12' },

      { group: '07', quota: '0/40', teacher: 'Nguyễn Đỗ Minh Sơn', day: 'Thứ 4', startPeriod: 4, periods: 2, room: 'C.SCLO2', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '07', quota: '0/40', teacher: 'Nguyễn Đỗ Minh Sơn', day: 'Thứ 6', startPeriod: 8, periods: 3, room: 'C.SCLO1', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '08', quota: '0/40', teacher: 'Lê Ngọc Long', day: 'Thứ 3', startPeriod: 1, periods: 2, room: 'C.SCLO2', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '08', quota: '0/40', teacher: 'Lê Ngọc Long', day: 'Thứ 7', startPeriod: 1, periods: 3, room: 'C.SCLO2', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '09', quota: '0/40', teacher: 'Lê Ngọc Long', day: 'Thứ 6', startPeriod: 3, periods: 3, room: 'C.SCLO2', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '09', quota: '0/40', teacher: 'Lê Ngọc Long', day: 'Thứ 7', startPeriod: 4, periods: 2, room: 'C.SCLO2', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '10', quota: '0/40', teacher: 'Lê Ngọc Long', day: 'Thứ 4', startPeriod: 6, periods: 3, room: 'C.SCLO2', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '10', quota: '0/40', teacher: 'Lê Ngọc Long', day: 'Thứ 5', startPeriod: 8, periods: 2, room: 'C.SCLO1', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '11', quota: '0/40', teacher: 'Lê Ngọc Long', day: 'Thứ 2', startPeriod: 3, periods: 3, room: 'C.SCLO2', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '11', quota: '0/40', teacher: 'Lê Ngọc Long', day: 'Thứ 3', startPeriod: 6, periods: 2, room: 'C.SCLO2', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '12', quota: '0/40', teacher: 'Đoàn Lê Quế Trân', day: 'Thứ 3', startPeriod: 8, periods: 3, room: 'C.SCLO2', weeks: '3, 4, 5, 6, 7, 8' },
      { group: '12', quota: '0/40', teacher: 'Đoàn Lê Quế Trân', day: 'Thứ 6', startPeriod: 4, periods: 2, room: 'C.SCLO1', weeks: '3, 4, 5, 6, 7, 8' },

      { group: '13', quota: '0/40', teacher: 'Lê Ngọc Long', day: 'Thứ 4', startPeriod: 1, periods: 2, room: 'C.SCLO1', weeks: '1, 2, 3, 4, 5, 6, 7, 8' },
      { group: '13', quota: '0/40', teacher: 'Lê Ngọc Long', day: 'Thứ 6', startPeriod: 6, periods: 2, room: 'C.SCLO2', weeks: '1, 2, 3, 4, 5, 6, 7, 8' },

      { group: '14', quota: '0/40', teacher: 'Lê Ngọc Long', day: 'Thứ 2', startPeriod: 6, periods: 2, room: 'C.SCLO2', weeks: '1, 2, 3, 4, 5, 6, 7, 8' },
      { group: '14', quota: '0/40', teacher: 'Lê Ngọc Long', day: 'Thứ 6', startPeriod: 8, periods: 2, room: 'C.SCLO2', weeks: '1, 2, 3, 4, 5, 6, 7, 8' },

      { group: '15', quota: '0/40', teacher: 'Lê Ngọc Long', day: 'Thứ 2', startPeriod: 1, periods: 4, room: 'C.SCLO1', weeks: '9, 10, 11, 12' },
      { group: '15', quota: '0/40', teacher: 'Lê Ngọc Long', day: 'Thứ 4', startPeriod: 1, periods: 4, room: 'C.SCLO1', weeks: '9, 10, 11, 12' }
    ]
  }
];

const dayCount = 7;
const scheduleBody = document.getElementById('scheduleBody');
const subjectSearch = document.getElementById('subjectSearch');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');
const danhSachNhap = document.getElementById('danhSachNhap');
const heartLayer = document.getElementById('heartLayer');
const weekSelect = document.getElementById('weekSelect');
const scheduleConflict = document.getElementById('scheduleConflict');
const scheduleConflictToast = document.getElementById('scheduleConflictToast');
const copySyncLinkBtn = document.getElementById('copySyncLinkBtn');
const syncStatus = document.getElementById('syncStatus');

let selectedSubjects = [];
let currentSubjectId = null;
let selectedWeek = 1;
const totalWeeks = 27;
const termStartDate = new Date(2026, 4, 4);
let conflictToastTimerId = null;
const scheduleStorageKey = 'tkb_saved_state_v1';
const stateQueryKey = 'state';

// Populate schedule
scheduleBody.innerHTML = slots
  .map((slot) => {
    const emptyCells = Array.from({ length: dayCount }, (_, dayIndex) => `<td data-day="${dayIndex}" data-period="${slot.period}"></td>`).join('');
    return `<tr><td class="period">${slot.period}</td><td class="time">${slot.time}</td>${emptyCells}</tr>`;
  })
  .join('');

const dayMap = {
  'thu 2': 0,
  'thứ 2': 0,
  'thứ 2': 0,
  'thu 3': 1,
  'thứ 3': 1,
  'thu 4': 2,
  'thứ 4': 2,
  'thu 5': 3,
  'thứ 5': 3,
  'thu 6': 4,
  'thứ 6': 4,
  'thu 7': 5,
  'thứ 7': 5,
  cn: 6,
  'chủ nhật': 6
};

function normalizeDay(dayLabel) {
  return dayLabel
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function getDayIndex(dayLabel) {
  const normalized = normalizeDay(dayLabel);
  if (normalized === 'chu nhat') {
    return 6;
  }

  const originalLower = dayLabel.toLowerCase();
  return dayMap[originalLower] ?? dayMap[normalized];
}

function getScheduleCell(dayIndex, period) {
  return scheduleBody.querySelector(`td[data-day="${dayIndex}"][data-period="${period}"]`);
}

function clearScheduleGrid() {
  scheduleBody.querySelectorAll('td[data-day]').forEach((cell) => {
    cell.innerHTML = '';
    cell.classList.remove('class-cell', 'class-continuation');
    cell.dataset.occupied = '';
  });
}

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function getWeekDateRange(weekNumber) {
  const start = new Date(termStartDate);
  start.setDate(termStartDate.getDate() + (weekNumber - 1) * 7);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  return `${formatDate(start)} - ${formatDate(end)}`;
}

function setupWeekSelector() {
  if (!weekSelect) {
    return;
  }

  weekSelect.innerHTML = Array.from({ length: totalWeeks }, (_, index) => {
    const week = index + 1;
    const label = `Tuần ${week}: ${getWeekDateRange(week)}`;
    return `<option value="${week}">${label}</option>`;
  }).join('');

  weekSelect.value = String(selectedWeek);
  weekSelect.addEventListener('change', (event) => {
    selectedWeek = Number(event.target.value) || 1;
    saveScheduleState();
    renderScheduleFromSelections();
  });
}

function isValidSelectedGroup(item) {
  if (!item || typeof item !== 'object') {
    return false;
  }

  const subjectId = Number(item.subjectId);
  const group = String(item.group || '');
  if (!Number.isInteger(subjectId) || !group) {
    return false;
  }

  const subject = subjects.find((s) => s.id === subjectId);
  if (!subject) {
    return false;
  }

  return subject.classes.some((cls) => cls.group === group);
}

function saveScheduleState() {
  const payload = { selectedWeek, selectedSubjects };

  try {
    localStorage.setItem(scheduleStorageKey, JSON.stringify(payload));
  } catch (error) {
    console.warn('Không thể lưu thời khóa biểu:', error);
  }

  updateSyncUrl(payload);
}

function loadScheduleState() {
  try {
    const urlPayload = parseStateFromUrl();
    if (urlPayload) {
      applyStatePayload(urlPayload);
      try {
        localStorage.setItem(scheduleStorageKey, JSON.stringify(urlPayload));
      } catch (error) {
        console.warn('Không thể lưu dữ liệu đồng bộ vào máy:', error);
      }
      return;
    }

    const raw = localStorage.getItem(scheduleStorageKey);
    if (!raw) {
      return;
    }

    const parsed = JSON.parse(raw);
    const week = Number(parsed?.selectedWeek);
    if (Number.isInteger(week) && week >= 1 && week <= totalWeeks) {
      selectedWeek = week;
    }

    const loaded = Array.isArray(parsed?.selectedSubjects) ? parsed.selectedSubjects : [];
    selectedSubjects = loaded
      .map((item) => ({
        subjectId: Number(item.subjectId),
        group: String(item.group || '')
      }))
      .filter((item) => isValidSelectedGroup(item));
  } catch (error) {
    console.warn('Không thể tải thời khóa biểu đã lưu:', error);
  }
}

function safeBase64Encode(text) {
  return btoa(unescape(encodeURIComponent(text)));
}

function safeBase64Decode(text) {
  return decodeURIComponent(escape(atob(text)));
}

function parseStateFromUrl() {
  try {
    const url = new URL(window.location.href);
    const encoded = url.searchParams.get(stateQueryKey);
    if (!encoded) {
      return null;
    }
    const json = safeBase64Decode(encoded);
    const parsed = JSON.parse(json);
    const cleaned = normalizeStatePayload(parsed);
    return cleaned;
  } catch (error) {
    console.warn('Không thể đọc state đồng bộ từ URL:', error);
    return null;
  }
}

function normalizeStatePayload(payload) {
  const week = Number(payload?.selectedWeek);
  const normalizedWeek = Number.isInteger(week) && week >= 1 && week <= totalWeeks ? week : 1;
  const loaded = Array.isArray(payload?.selectedSubjects) ? payload.selectedSubjects : [];
  const normalizedSubjects = loaded
    .map((item) => ({
      subjectId: Number(item.subjectId),
      group: String(item.group || '')
    }))
    .filter((item) => isValidSelectedGroup(item));
  return { selectedWeek: normalizedWeek, selectedSubjects: normalizedSubjects };
}

function applyStatePayload(payload) {
  const normalized = normalizeStatePayload(payload);
  selectedWeek = normalized.selectedWeek;
  selectedSubjects = normalized.selectedSubjects;
}

function updateSyncUrl(payload) {
  try {
    const normalized = normalizeStatePayload(payload);
    const encoded = safeBase64Encode(JSON.stringify(normalized));
    const url = new URL(window.location.href);
    url.searchParams.set(stateQueryKey, encoded);
    window.history.replaceState({}, '', url.toString());
  } catch (error) {
    console.warn('Không thể cập nhật link đồng bộ:', error);
  }
}

function setSyncStatus(message, isError = false) {
  if (!syncStatus) {
    return;
  }
  syncStatus.textContent = message;
  syncStatus.style.color = isError ? '#b4235d' : '#a24f7f';
}

function setupSyncLinkCopy() {
  if (!copySyncLinkBtn) {
    return;
  }

  copySyncLinkBtn.addEventListener('click', async () => {
    try {
      const url = new URL(window.location.href);
      if (!url.searchParams.get(stateQueryKey)) {
        updateSyncUrl({ selectedWeek, selectedSubjects });
      }
      await navigator.clipboard.writeText(window.location.href);
      setSyncStatus('Da copy link dong bo. Mo link nay tren thiet bi khac.');
    } catch (error) {
      setSyncStatus('Khong copy duoc. Hay copy URL tren thanh dia chi.', true);
    }
  });
}

function parseWeeks(weeksText) {
  if (!weeksText) {
    return null;
  }

  const parsed = weeksText
    .split(',')
    .map((week) => Number(week.trim()))
    .filter((week) => Number.isInteger(week));

  if (!parsed.length) {
    return null;
  }

  return new Set(parsed);
}

function classMatchesWeek(cls, weekNumber) {
  const classWeeks = parseWeeks(cls.weeks);
  if (!classWeeks) {
    return true;
  }

  return classWeeks.has(weekNumber);
}

function isGroupSelected(subjectId, group) {
  return selectedSubjects.some((item) => item.subjectId === subjectId && item.group === group);
}

function buildActiveClassEntries(selection = selectedSubjects) {
  const entries = [];

  selection.forEach((picked) => {
    const subject = subjects.find((item) => item.id === picked.subjectId);
    if (!subject) {
      return;
    }

    subject.classes.forEach((cls) => {
      if (cls.group !== picked.group) {
        return;
      }

      if (!classMatchesWeek(cls, selectedWeek)) {
        return;
      }

      const dayIndex = getDayIndex(cls.day);
      const startPeriod = Number(cls.startPeriod);
      const periods = Number(cls.periods);

      if (dayIndex === undefined || Number.isNaN(startPeriod) || Number.isNaN(periods)) {
        return;
      }

      entries.push({
        subjectName: subject.name,
        subjectCode: subject.code,
        group: cls.group,
        dayLabel: cls.day,
        dayIndex,
        startPeriod,
        endPeriod: startPeriod + periods - 1,
        room: cls.room
      });
    });
  });

  return entries;
}

function detectScheduleConflicts(entries) {
  const conflicts = [];

  for (let i = 0; i < entries.length; i += 1) {
    const current = entries[i];

    for (let j = i + 1; j < entries.length; j += 1) {
      const candidate = entries[j];
      if (current.dayIndex !== candidate.dayIndex) {
        continue;
      }

      const overlapStart = Math.max(current.startPeriod, candidate.startPeriod);
      const overlapEnd = Math.min(current.endPeriod, candidate.endPeriod);
      if (overlapStart > overlapEnd) {
        continue;
      }

      conflicts.push(
        `${current.dayLabel} tiết ${overlapStart}-${overlapEnd}: ${current.subjectCode} (nhóm ${current.group}) trùng với ${candidate.subjectCode} (nhóm ${candidate.group})`
      );
    }
  }

  return conflicts;
}

function renderConflictNotice(conflicts) {
  if (!scheduleConflict) {
    return;
  }

  if (!conflicts.length) {
    scheduleConflict.style.display = 'none';
    scheduleConflict.innerHTML = '';
    return;
  }

  const listMarkup = conflicts.map((item) => `<li>${item}</li>`).join('');
  scheduleConflict.innerHTML = `
    <div class="schedule-conflict-title">Phát hiện lịch trùng ở tuần ${selectedWeek}</div>
    <ul>${listMarkup}</ul>
  `;
  scheduleConflict.style.display = 'block';

  showConflictToast(conflicts);
}

function hideConflictToast() {
  if (!scheduleConflictToast) {
    return;
  }

  scheduleConflictToast.classList.remove('show');
  setTimeout(() => {
    if (scheduleConflictToast && !scheduleConflictToast.classList.contains('show')) {
      scheduleConflictToast.style.display = 'none';
    }
  }, 220);
}

function showConflictToast(conflicts) {
  if (!scheduleConflictToast || !conflicts.length) {
    return;
  }

  const previewItems = conflicts.slice(0, 3);
  const extraCount = conflicts.length - previewItems.length;
  const previewMarkup = previewItems.map((item) => `<li>${item}</li>`).join('');

  scheduleConflictToast.innerHTML = `
    <div class="schedule-conflict-toast-header">
      <div class="schedule-conflict-toast-title">Xung đột thời khóa biểu (tuần ${selectedWeek})</div>
      <button type="button" class="schedule-conflict-toast-close" aria-label="Đóng thông báo">×</button>
    </div>
    <ul>${previewMarkup}</ul>
    ${extraCount > 0 ? `<div class="schedule-conflict-toast-extra">Và còn ${extraCount} xung đột khác.</div>` : ''}
  `;

  const closeBtn = scheduleConflictToast.querySelector('.schedule-conflict-toast-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      hideConflictToast();
    });
  }

  scheduleConflictToast.style.display = 'block';
  requestAnimationFrame(() => {
    scheduleConflictToast.classList.add('show');
  });

  if (conflictToastTimerId) {
    clearTimeout(conflictToastTimerId);
  }

  conflictToastTimerId = setTimeout(() => {
    hideConflictToast();
  }, 6000);
}

function getNewConflictsAfterSelecting(subjectId, group) {
  const currentConflicts = detectScheduleConflicts(buildActiveClassEntries());
  const candidateSelection = [...selectedSubjects, { subjectId, group }];
  const candidateConflicts = detectScheduleConflicts(buildActiveClassEntries(candidateSelection));

  if (candidateConflicts.length <= currentConflicts.length) {
    return [];
  }

  const currentSet = new Set(currentConflicts);
  return candidateConflicts.filter((item) => !currentSet.has(item));
}

function renderScheduleFromSelections() {
  clearScheduleGrid();

  const activeEntries = buildActiveClassEntries();
  const conflicts = detectScheduleConflicts(activeEntries);
  renderConflictNotice(conflicts);

  activeEntries.forEach((entry) => {
    const startCell = getScheduleCell(entry.dayIndex, entry.startPeriod);
    if (!startCell || startCell.dataset.occupied === 'true') {
      return;
    }

    startCell.classList.add('class-cell');
    startCell.dataset.occupied = 'true';
    startCell.innerHTML = `
      <div class="class-card">
        <div class="class-name">${entry.subjectName}</div>
        <div class="class-meta">Mã: ${entry.subjectCode}</div>
        <div class="class-meta">Phòng: ${entry.room}</div>
        <div class="class-meta">Tiết ${entry.startPeriod}-${entry.endPeriod}</div>
      </div>
    `;

    for (let offset = 1; offset <= entry.endPeriod - entry.startPeriod; offset += 1) {
      const nextCell = getScheduleCell(entry.dayIndex, entry.startPeriod + offset);
      if (!nextCell) {
        continue;
      }

      nextCell.classList.add('class-continuation');
      nextCell.dataset.occupied = 'true';
    }
  });
}

// Search functionality with autocomplete
subjectSearch.addEventListener('input', (e) => {
  const keyword = e.target.value.trim().toLowerCase();
  
  if (!keyword) {
    searchResults.classList.remove('active');
    return;
  }

  const filtered = subjects.filter(
    (subject) =>
      subject.name.toLowerCase().includes(keyword) ||
      subject.code.toLowerCase().includes(keyword)
  );

  if (filtered.length === 0) {
    searchResults.innerHTML = '<div class="search-result-item" style="color: #a24f7f; padding: 15px;">Không tìm thấy môn học</div>';
    searchResults.classList.add('active');
    return;
  }

  searchResults.innerHTML = filtered
    .map(
      (subject) =>
        `<div class="search-result-item" data-id="${subject.id}" data-name="${subject.name}" data-code="${subject.code}">
          <div class="search-result-name">${subject.name}</div>
          <div class="search-result-code">MÃ: ${subject.code}</div>
        </div>`
    )
    .join('');

  searchResults.classList.add('active');

  // Add event listeners to result items
  document.querySelectorAll('.search-result-item').forEach((item) => {
    item.addEventListener('click', () => {
      const id = parseInt(item.dataset.id);
      const subject = subjects.find((s) => s.id === id);
      
      if (subject) {
        showDetailsTable(subject);
      }

      subjectSearch.value = '';
      searchResults.classList.remove('active');
    });
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-input-wrapper')) {
    searchResults.classList.remove('active');
  }
});

function updateDanhSach() {
  if (selectedSubjects.length === 0) {
    danhSachNhap.innerHTML = 'Chưa chọn môn học';
    return;
  }

  const rows = selectedSubjects.map((picked) => {
    const subject = subjects.find((item) => item.id === picked.subjectId);
    if (!subject) {
      return '';
    }

    return `
      <tr>
        <td>${subject.code}</td>
        <td class="selected-subject-name">${subject.name}</td>
        <td>${picked.group}</td>
        <td>${subject.credits}</td>
        <td>
          <button class="remove-subject-btn" onclick="removeSubjectGroup(${subject.id}, '${picked.group}')" aria-label="Xóa môn ${subject.name} nhóm ${picked.group}">✕</button>
        </td>
      </tr>
    `;
  }).join('');

  const totalCredits = selectedSubjects.reduce((sum, picked) => {
    const subject = subjects.find((item) => item.id === picked.subjectId);
    return sum + (subject ? Number(subject.credits) || 0 : 0);
  }, 0);

  danhSachNhap.innerHTML = `
    <table class="selected-subjects-table">
      <thead>
        <tr>
          <th>Mã</th>
          <th>Tên môn</th>
          <th>Nhóm</th>
          <th>Số TC</th>
          <th>Xóa</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
      <tfoot>
        <tr>
          <td colspan="3">Tổng số tín chỉ</td>
          <td>${totalCredits}</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  `;
}

function showDetailsTable(subject) {
  const detailsTable = document.getElementById('detailsTable');
  const classesTableBody = document.getElementById('classesTableBody');
  const displayedClasses = subject.classes;
  const classesByGroup = displayedClasses.reduce((map, cls) => {
    if (!map[cls.group]) {
      map[cls.group] = [];
    }
    map[cls.group].push(cls);
    return map;
  }, {});
  const groups = Object.keys(classesByGroup).sort((a, b) => Number(a) - Number(b));

  currentSubjectId = subject.id;

  classesTableBody.innerHTML = groups
    .map((group) => {
      const groupRows = classesByGroup[group];
      const rowCount = groupRows.length;
      const isSelected = isGroupSelected(subject.id, group);

      return groupRows
        .map((cls, index) => `
          <tr>
            ${index === 0 ? `<td rowspan="${rowCount}"><input type="checkbox" class="subject-check" data-subject-id="${subject.id}" data-group="${group}" ${isSelected ? 'checked' : ''} style="cursor: pointer;" /></td>` : ''}
            ${index === 0 ? `<td rowspan="${rowCount}">${subject.code}</td>` : ''}
            ${index === 0 ? `<td rowspan="${rowCount}">${subject.name}</td>` : ''}
            ${index === 0 ? `<td rowspan="${rowCount}">${subject.credits}</td>` : ''}
            ${index === 0 ? `<td rowspan="${rowCount}">${group}</td>` : ''}
            ${index === 0 ? `<td rowspan="${rowCount}">${cls.quota}</td>` : ''}
            <td>${cls.teacher}</td>
            <td>${cls.day}</td>
            <td>${cls.startPeriod}</td>
            <td>${cls.periods}</td>
            <td>${cls.room}</td>
            <td>${cls.weeks || '1-27'}</td>
          </tr>
        `)
        .join('');
    })
    .join('');

  classesTableBody.querySelectorAll('.subject-check').forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      const checked = event.target.checked;
      const subjectId = parseInt(event.target.dataset.subjectId, 10);
      const group = event.target.dataset.group;

      if (!group || Number.isNaN(subjectId)) {
        return;
      }

      if (checked) {
        const newConflicts = getNewConflictsAfterSelecting(subjectId, group);
        if (newConflicts.length > 0) {
          event.target.checked = false;
          renderConflictNotice(newConflicts);
          return;
        }

        if (!isGroupSelected(subjectId, group)) {
          selectedSubjects.push({ subjectId, group });
        }
      } else {
        selectedSubjects = selectedSubjects.filter((item) => !(item.subjectId === subjectId && item.group === group));
      }

      saveScheduleState();
      updateDanhSach();
      renderScheduleFromSelections();
    });
  });
  
  detailsTable.style.display = 'block';
  detailsTable.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function removeSubjectGroup(subjectId, group) {
  selectedSubjects = selectedSubjects.filter((item) => !(item.subjectId === subjectId && item.group === group));
  saveScheduleState();
  updateDanhSach();
  renderScheduleFromSelections();

  if (currentSubjectId === subjectId) {
    const subject = subjects.find((item) => item.id === subjectId);
    if (subject) {
      showDetailsTable(subject);
    }
  }
}

// Hearts animation
function createHearts(count) {
  if (!heartLayer) {
    return;
  }

  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement('span');
    const size = Math.floor(Math.random() * 14) + 16;
    const left = Math.random() * 100;
    const duration = (Math.random() * 6 + 8).toFixed(2);
    const delay = (Math.random() * 10).toFixed(2);
    const drift = `${Math.floor(Math.random() * 90) - 45}px`;
    const lightPinkPalette = ['#ffd6ec', '#ffc9e6', '#ffbfe0', '#ffcae8', '#ffdff1'];
    const color = lightPinkPalette[Math.floor(Math.random() * lightPinkPalette.length)];

    heart.className = 'heart';
    heart.style.left = `${left}%`;
    heart.style.setProperty('--size', `${size}px`);
    heart.style.setProperty('--heart-color', color);
    heart.style.animationDuration = `${duration}s`;
    heart.style.animationDelay = `-${delay}s`;
    heart.style.setProperty('--x-drift', drift);
    heart.style.opacity = (Math.random() * 0.22 + 0.52).toFixed(2);
    heartLayer.appendChild(heart);
  }
}

createHearts(80);

// Initialize danh sach
loadScheduleState();
setupWeekSelector();
setupSyncLinkCopy();
updateDanhSach();
renderScheduleFromSelections();
saveScheduleState();


