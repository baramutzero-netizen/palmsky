const CFG = {
  api: '__palm', title: '이장폐천', titleSize: 100, sub: '以掌蔽天 · 손바닥으로 하늘 가리기', unit: '초', tapLabel: '탁! 가리기',
  icon: ['hand'],
  colors: { bg: '#141a26', band: '#0e1320', accent: '#e8a33a', dim: '#a8b4c8', cream: '#f2e6cf', leaf: '#7fb069', panel: '#1e2636', line: '#2e3a50', faint: '#7d8aa0', gold: '#f3c34f', red: '#e5484d', ink: '#1b1512', btnShade: '#8d5a22' },
  stat: () => `지켜보는 눈 ${fmt(window.__palm.D().mk)} · 대신 가려 주는 손 ${window.__palm.D().au}번/초`,
  tap: J => J.coverTap(),
  endCard: [['손바닥으로는,', 600, 110, 'accent'], ['하늘을 가릴 수 없다.', 740, 100, 'accent'], ['다들 이미 알고 있었다', 940, 54, 'cream'], ['지금 이장폐천 하러 가기', 1080, 60, 'leaf'], ['baramutzero-netizen.github.io/palmsky', 1180, 40, 'cream', 'Galmuri11']],
  async play(h) {
    // hook: the very first frame already shows palms all over the report card, F peeking through
    enterT = -1e9; h.J.cover(14, false); h.tap();
    h.cap('손바닥으로 하늘을 가릴 수 있을까?', '일단 성적표부터', true);
    await h.tapFor(2200, 6);
    h.cap('"강아지가 먹었어요"', '손가락 사이로 다 보인다');
    { const tp = h.tapFor(1600, 5); await h.buyAll(0, 80); await tp; }
    h.cap('연습생이 됐다', '중2 때 글은 비공개로');
    h.buy('v1'); { const tp = h.tapFor(1500, 5); await h.buyAll(1, 10); await tp; }
    h.cap('데뷔했더니 열애설', '"친한 동료일 뿐입니다"');
    h.buy('v2'); { const tp = h.tapFor(1500, 5); await h.buyAll(2, 10); await tp; }
    h.cap('회사에선 전체 회신을,', '식당에선 주방을');
    await h.venue(3, 10, 0); await h.tapFor(700, 5); await h.venue(4, 10, 0); await h.tapFor(700, 5);
    h.cap('"우리 애는 그럴 애가 아니에요"', '장부는 두 권이다');
    await h.venue(5, 10, 0); await h.tapFor(700, 5); await h.venue(6, 10, 0); await h.tapFor(700, 5);
    h.cap('"기억나지 않습니다"', '"묵비권을 행사하겠습니다"');
    await h.venue(7, 10, 0); await h.tapFor(700, 5); await h.venue(8, 10, 0); await h.tapFor(700, 5);
    h.cap('마지막으로 가린 건', '나 자신');
    await h.venue(9, 10, 0); await h.tapFor(1100, 5);
    h.cap('아무리 가려도', '가린 하늘은 0.001%');
    window.__endK = 0.5; h.buy('end');
    await h.sleep(1800); h.cap('', '');
  },
};
