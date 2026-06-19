/**
 * 进失球时间段分布 — 手动录入（无 API 时使用）
 * 来源：数据站截图 / 用户提交；与盘口录入流程相同
 * 跑：node scripts/apply-prediction-signals.js
 */
module.exports = {
  m29: {
    sample_label: '近30场',
    _source: 'user_screenshot_2026-06-20_bra_hai',
    intervals: ['1–15', '16–30', '31–45', '46–60', '61–75', '76–90', '90+'],
    home: {
      scored: [12, 9, 29, 16, 10, 14, 7],
      conceded: [17, 11, 20, 11, 20, 17, 2],
    },
    away: {
      scored: [14, 11, 14, 18, 14, 23, 2],
      conceded: [17, 23, 7, 12, 15, 17, 5],
    },
  },
  m30: {
    sample_label: '近30场',
    _source: 'user_screenshot_2026-06-20_sco_mar',
    intervals: ['1–15', '16–30', '31–45', '46–60', '61–75', '76–90', '90+'],
    home: {
      scored: [19, 10, 12, 17, 10, 17, 12],
      conceded: [14, 14, 16, 14, 16, 18, 8],
    },
    away: {
      scored: [17, 14, 11, 11, 16, 22, 4],
      conceded: [6, 6, 20, 20, 33, 6, 0],
    },
  },
  m31: {
    sample_label: '近30场',
    _source: 'user_screenshot_2026-06-20_tur_pry',
    intervals: ['1–15', '16–30', '31–45', '46–60', '61–75', '76–90', '90+'],
    home: {
      scored: [11, 13, 16, 22, 16, 11, 8],
      conceded: [22, 13, 13, 15, 20, 9, 4],
    },
    away: {
      scored: [5, 14, 11, 22, 28, 14, 2],
      conceded: [27, 10, 25, 12, 10, 5, 10],
    },
  },
  m32: {
    sample_label: '近30场',
    _source: 'user_screenshot_2026-06-20_usa_aus',
    intervals: ['1–15', '16–30', '31–45', '46–60', '61–75', '76–90', '90+'],
    home: {
      scored: [19, 11, 28, 7, 19, 9, 3],
      conceded: [9, 25, 16, 20, 13, 11, 2],
    },
    away: {
      scored: [8, 17, 15, 20, 15, 17, 5],
      conceded: [5, 15, 10, 15, 5, 35, 10],
    },
  },
};
