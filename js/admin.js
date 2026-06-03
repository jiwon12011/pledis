/* 관리자 페이지 스크립트 */

// ── 탑바 날짜
const dateEl = document.getElementById('topbarDate');
if (dateEl) {
    const now = new Date();
    dateEl.textContent = now.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
}

// ── 탭 전환
const navItems = document.querySelectorAll('.sidebar_nav li[data-tab]');
const tabs = document.querySelectorAll('.tab_content');
const topbarTitle = document.getElementById('topbarTitle');
const tabNames = { dashboard: '대시보드', artist: '아티스트', notice: '공지사항', audition: '오디션', stats: '통계' };

function switchTab(name) {
    navItems.forEach(li => li.classList.toggle('active', li.dataset.tab === name));
    tabs.forEach(t => t.classList.toggle('active', t.id === 'tab_' + name));
    if (topbarTitle) topbarTitle.textContent = tabNames[name] || name;
    if (name === 'stats') initStatsCharts();
}

navItems.forEach(li => {
    li.addEventListener('click', () => switchTab(li.dataset.tab));
});

// ── 모바일 사이드바 토글
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}
document.addEventListener('click', e => {
    if (sidebar && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        sidebar.classList.remove('open');
    }
});

// ── 숫자 카운트업 애니메이션
function countUp(el) {
    const target = parseInt(el.dataset.count.replace(/,/g, ''), 10);
    const duration = 1200;
    const step = 16;
    const steps = duration / step;
    let current = 0;
    const inc = target / steps;
    const timer = setInterval(() => {
        current += inc;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = Math.floor(current).toLocaleString('ko-KR');
    }, step);
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            document.querySelectorAll('.stat_value[data-count]').forEach(countUp);
            observer.disconnect();
        }
    });
}, { threshold: 0.1 });

const firstCards = document.querySelector('.stat_cards');
if (firstCards) observer.observe(firstCards);

// ── Chart.js 공통 색상
const ORANGE = '#FF4600';
const ORANGE2 = '#e8704a';
const BLUE = '#4488ff';
const GREEN = '#22c87a';
const RED = '#ff4d6d';
const PURPLE = '#a855f7';

// ── 대시보드 차트 (방문자 추이)
const visitCtx = document.getElementById('visitChart');
if (visitCtx) {
    new Chart(visitCtx, {
        type: 'bar',
        data: {
            labels: ['7월', '8월', '9월', '10월', '11월', '12월', '1월', '2월', '3월', '4월', '5월', '6월'],
            datasets: [
                {
                    label: '방문자 수',
                    data: [82000, 95000, 110000, 143000, 168000, 185000, 122000, 131000, 148000, 159000, 172000, 148293],
                    backgroundColor: ORANGE + '22',
                    borderColor: ORANGE,
                    borderWidth: 2,
                    borderRadius: 6,
                    order: 2
                },
                {
                    label: '신규 방문자',
                    data: [41000, 48000, 56000, 71000, 84000, 92000, 61000, 66000, 74000, 80000, 86000, 74000],
                    type: 'line',
                    borderColor: BLUE,
                    backgroundColor: BLUE + '18',
                    borderWidth: 2,
                    pointRadius: 4,
                    pointBackgroundColor: BLUE,
                    tension: 0.4,
                    fill: true,
                    order: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2.4,
            plugins: { legend: { position: 'top', labels: { font: { size: 12 }, usePointStyle: true } } },
            scales: {
                y: { beginAtZero: true, grid: { color: '#f0f2f6' }, ticks: { callback: v => (v / 10000).toFixed(0) + '만' } },
                x: { grid: { display: false } }
            }
        }
    });
}

// ── 대시보드 차트 (아티스트별)
const artistCtx = document.getElementById('artistChart');
if (artistCtx) {
    new Chart(artistCtx, {
        type: 'doughnut',
        data: {
            labels: ['SEVENTEEN', 'TWS', 'NU\'EST', '황민현', 'AFTER SCHOOL', 'BUMZU', 'ORANGE CARAMEL'],
            datasets: [{
                data: [52, 24, 9, 6, 4, 3, 2],
                backgroundColor: [ORANGE, BLUE, GREEN, PURPLE, RED, '#f59e0b', '#14b8a6'],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            cutout: '62%',
            plugins: {
                legend: { position: 'bottom', labels: { font: { size: 11 }, usePointStyle: true, padding: 10 } }
            }
        }
    });
}

// ── 통계 탭 차트 (초기화 플래그)
let statsInited = false;
function initStatsCharts() {
    if (statsInited) return;
    statsInited = true;

    // 분야별 지원
    const fieldCtx = document.getElementById('auditionFieldChart');
    if (fieldCtx) {
        new Chart(fieldCtx, {
            type: 'bar',
            data: {
                labels: ['보컬', '댄스', '랩', '연기', '악기연주', '기타'],
                datasets: [{
                    label: '지원자 수',
                    data: [1420, 980, 640, 480, 210, 117],
                    backgroundColor: [ORANGE + 'cc', BLUE + 'cc', GREEN + 'cc', PURPLE + 'cc', RED + 'cc', '#f59e0b' + 'cc'],
                    borderRadius: 8,
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                aspectRatio: 2.2,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, grid: { color: '#f0f2f6' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // 국적 분포
    const natCtx = document.getElementById('nationalityChart');
    if (natCtx) {
        new Chart(natCtx, {
            type: 'pie',
            data: {
                labels: ['대한민국', '일본', '중국', '미국', '기타'],
                datasets: [{
                    data: [38, 21, 18, 12, 11],
                    backgroundColor: [ORANGE, BLUE, GREEN, PURPLE, '#e2e8f0'],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'bottom', labels: { font: { size: 11 }, usePointStyle: true } },
                    tooltip: { callbacks: { label: ctx => ctx.label + ': ' + ctx.parsed + '%' } }
                }
            }
        });
    }

    // 합불 비율
    const resultCtx = document.getElementById('resultChart');
    if (resultCtx) {
        new Chart(resultCtx, {
            type: 'doughnut',
            data: {
                labels: ['합격', '검토중', '불합격'],
                datasets: [{
                    data: [5.6, 31.3, 63.1],
                    backgroundColor: [GREEN, '#f59e0b', RED],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                cutout: '65%',
                plugins: {
                    legend: { position: 'bottom', labels: { font: { size: 12 }, usePointStyle: true } },
                    tooltip: { callbacks: { label: ctx => ctx.label + ': ' + ctx.parsed + '%' } }
                }
            }
        });
    }

    // 공지 조회수
    const noticeCtx = document.getElementById('noticeViewChart');
    if (noticeCtx) {
        new Chart(noticeCtx, {
            type: 'line',
            data: {
                labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
                datasets: [
                    {
                        label: 'SEVENTEEN',
                        data: [210000, 185000, 230000, 198000, 260000, 215000],
                        borderColor: ORANGE, backgroundColor: ORANGE + '15',
                        borderWidth: 2.5, pointRadius: 5, pointBackgroundColor: ORANGE,
                        tension: 0.4, fill: true
                    },
                    {
                        label: 'TWS',
                        data: [62000, 71000, 85000, 78000, 94000, 88000],
                        borderColor: BLUE, backgroundColor: BLUE + '15',
                        borderWidth: 2.5, pointRadius: 5, pointBackgroundColor: BLUE,
                        tension: 0.4, fill: true
                    },
                    {
                        label: '오디션',
                        data: [48000, 52000, 110000, 128000, 145000, 138000],
                        borderColor: GREEN, backgroundColor: GREEN + '15',
                        borderWidth: 2.5, pointRadius: 5, pointBackgroundColor: GREEN,
                        tension: 0.4, fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                aspectRatio: 2.4,
                plugins: { legend: { position: 'top', labels: { font: { size: 12 }, usePointStyle: true } } },
                scales: {
                    y: { beginAtZero: true, grid: { color: '#f0f2f6' }, ticks: { callback: v => (v / 10000).toFixed(0) + '만' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }
}

// ── 공지 검색 필터
const noticeSearch = document.getElementById('noticeSearch');
if (noticeSearch) {
    noticeSearch.addEventListener('input', function () {
        const q = this.value.toLowerCase();
        document.querySelectorAll('#noticeTable tbody tr').forEach(tr => {
            tr.style.display = tr.textContent.toLowerCase().includes(q) ? '' : 'none';
        });
    });
}

// ── 오디션 검색 + 상태 필터
const auditionSearch = document.getElementById('auditionSearch');
const auditionFilter = document.getElementById('auditionFilter');
function filterAudition() {
    const q = (auditionSearch?.value || '').toLowerCase();
    const s = auditionFilter?.value || '';
    document.querySelectorAll('#auditionTable tbody tr').forEach(tr => {
        const text = tr.textContent.toLowerCase();
        const statusEl = tr.querySelector('.status');
        const statusText = statusEl ? statusEl.textContent : '';
        const matchQ = q ? text.includes(q) : true;
        const matchS = s ? statusText === s : true;
        tr.style.display = matchQ && matchS ? '' : 'none';
    });
}
auditionSearch?.addEventListener('input', filterAudition);
auditionFilter?.addEventListener('change', filterAudition);
