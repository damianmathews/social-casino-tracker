// Initial casino data
const INITIAL_CASINOS = [
  { site: "Casino Click", url: "https://casino.click/coins/coin-shop", deposited: 94.97, redeemed: 0.00, profit: -94.97, notes: "" },
  { site: "Lucky Stake", url: "https://luckystake.com/?c=95905_rlOPVEWO", deposited: 114.97, redeemed: 169.00, profit: 54.03, notes: "" },
  { site: "Mega Bonanza", url: "https://www.megabonanza.com/?r=309474442", deposited: 831.21, redeemed: 455.80, profit: -375.41, notes: "Includes $105.96 on the way" },
  { site: "Rolla", url: "https://www.rolla.com/?raf=363271", deposited: 10.00, redeemed: 0.00, profit: -10.00, notes: "" },
  { site: "Hello Millions", url: "https://www.hellomillions.com/lp/raf?r=f84d474d%2F2007659368", deposited: 219.95, redeemed: 675.08, profit: 455.13, notes: "" },
  { site: "High 5", url: "https://high5casino.com/gc?adId=INV001%3Adamianmathews", deposited: 0.00, redeemed: 0.00, profit: 0.00, notes: "cant view history, sent a support email" },
  { site: "Tao Fortune", url: "https://taofortune.com/?invited_by=EZB6EN", deposited: 79.96, redeemed: 109.00, profit: 29.04, notes: "" },
  { site: "Play Fame", url: "https://www.playfame.com/lp/raf?r=84e5d5df%2F2007714901", deposited: 154.96, redeemed: 327.94, profit: 172.98, notes: "" },
  { site: "Spinfinite", url: "https://www.spinfinite.com/welcome/", deposited: 0.00, redeemed: 0.00, profit: 0.00, notes: "cant view history, sent a support email" },
  { site: "Sheesh", url: "https://sheeshcasino.com/?ref=nzy1zmv", deposited: 108.96, redeemed: 0.00, profit: -108.96, notes: "" },
  { site: "Spinpals", url: "https://www.spinpals.com?referralcode=61f13daf-1acd-415b-8a04-dae1ad9fad20", deposited: 144.98, redeemed: 259.55, profit: 114.57, notes: "" },
  { site: "Speedsweeps", url: "https://speedsweeps.com/?ref=r_damianmathews", deposited: 30.00, redeemed: 0.00, profit: -30.00, notes: "" },
  { site: "Jackpot Rabbit", url: "https://jackpotrabbit.com/?invited_by=16SL6P", deposited: 54.98, redeemed: 121.00, profit: 66.02, notes: "" },
  { site: "Spinquest", url: "https://spinquest.com/?u=9WOL5TS", deposited: 9.99, redeemed: 0.00, profit: -9.99, notes: "" },
  { site: "Goldenheartsgames", url: "https://www.goldenheartsgames.com/referral/G8JQ5OJWVM", deposited: 19.99, redeemed: 0.00, profit: -19.99, notes: "" },
  { site: "Funz City", url: "http://funzcity.com/?invited_by=RYKQGT", deposited: 29.99, redeemed: 181.00, profit: 151.01, notes: "" },
  { site: "Lucky Hands", url: "https://luckyhands.com/sign-up?code=cf771ed5-0fc9-4081-be66-c17bca24e638", deposited: 30.10, redeemed: 0.00, profit: -30.10, notes: "" },
  { site: "ChipNWin", url: "https://chipnwin.com/?earn=5bQz8FgY", deposited: 19.99, redeemed: 0.00, profit: -19.99, notes: "" },
  { site: "Funrize", url: "https://funrize.com/?invited_by=LYLBWB", deposited: 124.97, redeemed: 0.00, profit: -124.97, notes: "" },
  { site: "Nolimit Coins", url: "https://nolimitcoins.com/?invited_by=QF8UQ8", deposited: 104.97, redeemed: 0.00, profit: -104.97, notes: "" },
  { site: "FortuneWheelz", url: "http://fortunewheelz.com/?invited_by=DH82SN", deposited: 204.94, redeemed: 356.00, profit: 151.06, notes: "" },
  { site: "Clubs Casino", url: "https://clubscasino.com/promotions", deposited: 19.99, redeemed: 180.74, profit: 160.75, notes: "" },
  { site: "Kickr", url: "https://kickr.com/signup/bn0s42bt", deposited: 9.99, redeemed: 0.00, profit: -9.99, notes: "" },
  { site: "Yotta", url: "https://withyotta.com", deposited: 4.99, redeemed: 0.00, profit: -4.99, notes: "Referral Code: DAMIAN6G7CZ5I1" },
  { site: "The Money Factory", url: "https://www.themoneyfactory.com/referral?referralcode=dc3c9b53-0407-427a-ad41-3388359851e0", deposited: 0.00, redeemed: 0.00, profit: 0.00, notes: "made 2nd account accidentally, no idea how much $" },
  { site: "Get Zoot", url: "https://getzoot.us/?referralCode=ZOOTwithUSER164820", deposited: -3.00, redeemed: 0.00, profit: 3.00, notes: "" },
  { site: "Sixty6", url: "https://sixty6.com/?ref=319AA07B001EA0F3&modal=register", deposited: 275.43, redeemed: 337.00, profit: 61.57, notes: "" },
  { site: "Smiles Casino", url: "https://smilescasino.com/lobby", deposited: 9.99, redeemed: 0.00, profit: -9.99, notes: "" },
  { site: "Moonspin", url: "https://moonspin.us/home", deposited: 9.99, redeemed: 221.89, profit: 211.90, notes: "" },
  { site: "Baba Casino", url: "https://play.babacasino.com/#/?referral_id=88d87cd0952343d13351a28ea79224a1&inv_referral=true&fb_source=invite", deposited: 329.92, redeemed: 857.60, profit: 527.68, notes: "Bank Transfers: $711.86 -- Gift Cards: $145.74" },
  { site: "Dara Casino", url: "https://daracasino.com/signup?refferalCode=pnPc5HaE6f", deposited: 0.00, redeemed: 0.00, profit: 0.00, notes: "cant view history, sent a support email" },
  { site: "SpinBlitz", url: "https://www.spinblitz.com/lp/raf?r=3fb7b74a%2F2010064068", deposited: 214.95, redeemed: 214.61, profit: -0.34, notes: "" },
  { site: "Jumbo 88", url: "https://www.jumbo88.com/signup?referralCode=3Q8Zu1", deposited: 129.97, redeemed: 0.00, profit: -129.97, notes: "" },
  { site: "Sweepnext", url: "https://sweepnext.com/?c=97437_fvg1OIo4", deposited: 54.98, redeemed: 0.00, profit: -54.98, notes: "" },
  { site: "Spree", url: "https://spree.com/?r=1603114", deposited: 79.97, redeemed: 284.00, profit: 204.03, notes: "" },
  { site: "Scarlet Sands", url: "http://scarletsands.com/?invited_by=25NWR9", deposited: 279.94, redeemed: 201.00, profit: -78.94, notes: "STILL WON'T LET ME CASH OUT - WATCH EMAIL" },
  { site: "Pulsz Bingo", url: "https://www.pulszbingo.com/?invited_by=4b68bj", deposited: 96.95, redeemed: 318.60, profit: 221.65, notes: "Cash via Trustly: $253.12 -- Gift Card: $65.48" },
  { site: "LunaLand Casino", url: "https://lunalandcasino.com/?inviter=b11a02bc-faf2-571e-90ba-b045a4ee5d93&utm_source=referral&utm_medium=inviteafriend", deposited: 160.00, redeemed: 72.54, profit: -87.46, notes: "" },
  { site: "Peak Play", url: "https://peakplay.com/#lobby", deposited: 20.00, redeemed: 0.00, profit: -20.00, notes: "" },
  { site: "RealPrize", url: "https://realprize.com/refer/1564907", deposited: 399.95, redeemed: 1163.64, profit: 763.69, notes: "160.06 otw" },
  { site: "Fortune Coins", url: "https://www.fortunecoins.com/signup/7d34bac1-7fee-458e-89ad-c0b27e673776", deposited: 50.00, redeemed: 0.00, profit: -50.00, notes: "" },
  { site: "Zula Casino", url: "https://www.zulacasino.com/signup/d1bb94bb-296e-47c5-bd89-c160b73be805", deposited: 1040.00, redeemed: 2151.73, profit: 1111.73, notes: "" },
  { site: "Cashoomo", url: "https://cashoomo.com/", deposited: 551.88, redeemed: 1500.00, profit: 948.12, notes: "12+ Purchases and 12+ Redemptions Still have another $100 to redeem" },
  { site: "Mcluck", url: "https://www.mcluck.com/lp/raf?r=61a3c773%2F908427229", deposited: 74.99, redeemed: 166.40, profit: 91.41, notes: "" },
  { site: "Myprize", url: "https://myprize.us/invite/loudJelly40", deposited: 10.00, redeemed: 0.00, profit: -10.00, notes: "" },
  { site: "Legendz", url: "https://www.legendz.com/?referred_by_id=507153", deposited: 49.99, redeemed: 121.70, profit: 71.71, notes: "" },
  { site: "Sportzino", url: "https://sportzino.com/signup/81e6a9a5-ad9b-4985-90dc-be9c2fbc8fa6", deposited: 80.00, redeemed: 89.95, profit: 9.95, notes: "" },
  { site: "Betty Sweeps", url: "https://bettysweeps.com/", deposited: 14.99, redeemed: 0.00, profit: -14.99, notes: "" },
  { site: "Jackpota", url: "https://www.jackpota.com/?r=261261245", deposited: 501.89, redeemed: 192.12, profit: -309.77, notes: "" },
  { site: "Wild Horse", url: "https://wildhorsebucks.com/", deposited: 69.98, redeemed: 0.00, profit: -69.98, notes: "" },
  { site: "AcornFun", url: "https://game.acornfun.com/#/dashboard/welcome?channel=Refer&campaign=Refer&invite_code=G3VKA1BC", deposited: 99.99, redeemed: 163.16, profit: 63.17, notes: "" },
  { site: "Lonestar Casino", url: "https://lonestarcasino.com/refer/924575", deposited: 355.94, redeemed: 261.00, profit: -94.94, notes: "261 OTW 11/5/25" },
  { site: "Sidepot", url: "https://sidepot.us/profile/me", deposited: 0.00, redeemed: 179.77, profit: 179.77, notes: "Off the free dollar lmao" },
  { site: "Modo", url: "https://modo.us/?referralCode=CZ04VN", deposited: 55.99, redeemed: 100.74, profit: 44.75, notes: "" },
  { site: "Mr Goodwin", url: "", deposited: 49.99, redeemed: 0.00, profit: -49.99, notes: "" }
];

// State
let casinos = [];
let transactions = [];
let currentView = 'dashboard';
let currentSort = { field: 'profit', desc: true };
let currentFilter = 'all';
let searchTerm = '';
let settings = {
    theme: 'dark',
    density: 'comfortable'
};

// Initialize
function init() {
    loadData();
    setupEventListeners();
    applySettings();
    render();
}

// Data Management
function loadData() {
    const savedCasinos = localStorage.getItem('casinos');
    const savedTransactions = localStorage.getItem('transactions');
    const savedSettings = localStorage.getItem('settings');

    casinos = savedCasinos ? JSON.parse(savedCasinos) : JSON.parse(JSON.stringify(INITIAL_CASINOS));
    transactions = savedTransactions ? JSON.parse(savedTransactions) : [];
    settings = savedSettings ? JSON.parse(savedSettings) : settings;
}

function saveData() {
    localStorage.setItem('casinos', JSON.stringify(casinos));
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('settings', JSON.stringify(settings));
}

// Event Listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const view = btn.getAttribute('data-view');
            switchView(view);
        });
    });

    // Theme toggle
    document.getElementById('darkModeBtn').addEventListener('click', toggleTheme);

    // Density settings
    document.getElementById('densityBtn').addEventListener('click', () => openModal('densityModal'));

    // Modal handlers
    document.querySelectorAll('.close-btn, [data-modal]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modalId = btn.getAttribute('data-modal');
            if (modalId) closeModal(modalId);
        });
    });

    // Form submissions
    document.getElementById('addCasinoForm').addEventListener('submit', handleAddCasino);
    document.getElementById('transactionForm').addEventListener('submit', handleAddTransaction);
    document.getElementById('editCasinoForm').addEventListener('submit', handleEditCasino);

    // Delete casino
    document.getElementById('deleteCasinoBtn').addEventListener('click', handleDeleteCasino);

    // Add buttons
    document.getElementById('addCasinoBtn').addEventListener('click', () => {
        document.getElementById('addCasinoForm').reset();
        openModal('addCasinoModal');
    });

    document.getElementById('addTransactionBtn').addEventListener('click', () => {
        document.getElementById('transactionForm').reset();
        document.getElementById('transactionDate').valueAsDate = new Date();
        populateCasinoSelect();
        openModal('transactionModal');
    });

    // Search and filters
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        renderCasinosTable();
    });

    document.getElementById('filterSelect').addEventListener('change', (e) => {
        currentFilter = e.target.value;
        renderCasinosTable();
    });

    document.getElementById('sortBtn').addEventListener('click', toggleSort);


    // Density settings
    document.querySelectorAll('input[name="density"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.checked) {
                settings.density = e.target.value;
                applySettings();
                saveData();
            }
        });
    });

    document.querySelectorAll('input[name="theme"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.checked) {
                settings.theme = e.target.value;
                applySettings();
                saveData();
            }
        });
    });

    // Table sorting
    document.querySelectorAll('.sortable').forEach(th => {
        th.addEventListener('click', () => {
            const field = th.getAttribute('data-sort');
            if (currentSort.field === field) {
                currentSort.desc = !currentSort.desc;
            } else {
                currentSort.field = field;
                currentSort.desc = true;
            }
            renderCasinosTable();
        });
    });
}

// View Management
function switchView(view) {
    currentView = view;
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

    document.getElementById(`${view}View`).classList.add('active');
    document.querySelector(`[data-view="${view}"]`).classList.add('active');

    render();
}

// Settings
function applySettings() {
    const root = document.documentElement;
    const body = document.body;

    // Theme
    if (settings.theme === 'dark') {
        root.classList.remove('light');
    } else if (settings.theme === 'light') {
        root.classList.add('light');
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) root.classList.remove('light');
        else root.classList.add('light');
    }

    // Density
    body.classList.remove('density-comfortable', 'density-compact', 'density-dense');
    body.classList.add(`density-${settings.density}`);

    // Update radio buttons
    document.querySelector(`input[name="density"][value="${settings.density}"]`).checked = true;
    document.querySelector(`input[name="theme"][value="${settings.theme}"]`).checked = true;
}

function toggleTheme() {
    const themes = ['dark', 'light', 'auto'];
    const currentIndex = themes.indexOf(settings.theme);
    settings.theme = themes[(currentIndex + 1) % themes.length];
    applySettings();
    saveData();
}

function toggleSort() {
    currentSort.desc = !currentSort.desc;
    document.getElementById('sortBtn').textContent = `Sort: Profit ${currentSort.desc ? '↓' : '↑'}`;
    renderCasinosTable();
}

// Modal Management
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Casino Management
function handleAddCasino(e) {
    e.preventDefault();

    const newCasino = {
        site: document.getElementById('newCasinoName').value,
        url: document.getElementById('newCasinoUrl').value,
        deposited: parseFloat(document.getElementById('newCasinoDeposited').value) || 0,
        redeemed: parseFloat(document.getElementById('newCasinoRedeemed').value) || 0,
        profit: 0,
        notes: document.getElementById('newCasinoNotes').value
    };

    newCasino.profit = newCasino.redeemed - newCasino.deposited;
    casinos.push(newCasino);

    saveData();
    render();
    closeModal('addCasinoModal');
}

function handleEditCasino(e) {
    e.preventDefault();

    const index = parseInt(document.getElementById('editCasinoIndex').value);
    casinos[index].site = document.getElementById('editCasinoName').value;
    casinos[index].url = document.getElementById('editCasinoUrl').value;
    casinos[index].notes = document.getElementById('editCasinoNotes').value;

    saveData();
    render();
    closeModal('editCasinoModal');
}

function handleDeleteCasino() {
    if (!confirm('Are you sure you want to delete this casino? This will also remove all associated transactions.')) {
        return;
    }

    const index = parseInt(document.getElementById('editCasinoIndex').value);
    const casinoName = casinos[index].site;

    // Remove casino
    casinos.splice(index, 1);

    // Remove associated transactions
    transactions = transactions.filter(t => t.casinoName !== casinoName);

    saveData();
    render();
    closeModal('editCasinoModal');
}

function openEditCasino(index) {
    const casino = casinos[index];
    document.getElementById('editCasinoIndex').value = index;
    document.getElementById('editCasinoName').value = casino.site;
    document.getElementById('editCasinoUrl').value = casino.url;
    document.getElementById('editCasinoNotes').value = casino.notes;
    openModal('editCasinoModal');
}

// Transaction Management
function handleAddTransaction(e) {
    e.preventDefault();

    const casinoName = document.getElementById('casinoInput').value;
    const type = document.getElementById('transactionType').value;
    const amount = parseFloat(document.getElementById('transactionAmount').value);
    const date = document.getElementById('transactionDate').value || new Date().toISOString().split('T')[0];
    const note = document.getElementById('transactionNote').value;

    // Find or create casino
    let casinoIndex = casinos.findIndex(c => c.site.toLowerCase() === casinoName.toLowerCase());

    if (casinoIndex === -1) {
        // Create new casino
        const newCasino = {
            site: casinoName,
            url: '',
            deposited: 0,
            redeemed: 0,
            profit: 0,
            notes: ''
        };
        casinos.push(newCasino);
        casinoIndex = casinos.length - 1;
    }

    const transaction = {
        casinoIndex,
        casinoName: casinos[casinoIndex].site,
        type,
        amount,
        date,
        note,
        timestamp: new Date().toISOString()
    };

    transactions.push(transaction);

    // Update casino totals
    if (type === 'deposit') {
        casinos[casinoIndex].deposited += amount;
    } else {
        casinos[casinoIndex].redeemed += amount;
    }
    casinos[casinoIndex].profit = casinos[casinoIndex].redeemed - casinos[casinoIndex].deposited;

    saveData();
    render();
    closeModal('transactionModal');
}

function deleteTransaction(index) {
    if (!confirm('Delete this transaction?')) return;

    const transaction = transactions[index];
    const casinoIndex = casinos.findIndex(c => c.site === transaction.casinoName);

    if (casinoIndex !== -1) {
        if (transaction.type === 'deposit') {
            casinos[casinoIndex].deposited -= transaction.amount;
        } else {
            casinos[casinoIndex].redeemed -= transaction.amount;
        }
        casinos[casinoIndex].profit = casinos[casinoIndex].redeemed - casinos[casinoIndex].deposited;
    }

    transactions.splice(index, 1);
    saveData();
    render();
}

function populateCasinoSelect() {
    const datalist = document.getElementById('casinoList');
    datalist.innerHTML = casinos
        .map(c => `<option value="${c.site}">`)
        .join('');
}

// Utilities
function getRootDomain(url) {
    if (!url) return '';
    try {
        let fullUrl = url.startsWith('http') ? url : 'https://' + url;
        const urlObj = new URL(fullUrl);
        return urlObj.hostname.replace('www.', '');
    } catch {
        return '';
    }
}

function formatCurrency(amount) {
    return '$' + amount.toFixed(2);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function getROI(deposited, redeemed) {
    if (deposited === 0) return 0;
    return ((redeemed - deposited) / deposited) * 100;
}

function getProfitClass(value) {
    if (value > 0) return 'positive';
    if (value < 0) return 'negative';
    return '';
}

// Analytics Functions
function calculateMetrics() {
    const totals = casinos.reduce((acc, c) => {
        acc.deposited += c.deposited;
        acc.redeemed += c.redeemed;
        acc.profit += c.profit;
        return acc;
    }, { deposited: 0, redeemed: 0, profit: 0 });

    const roi = getROI(totals.deposited, totals.redeemed);
    const activeCasinos = casinos.filter(c => c.deposited > 0 || c.redeemed > 0).length;
    const profitableCasinos = casinos.filter(c => c.profit > 0).length;
    const profitablePercent = casinos.length > 0 ? (profitableCasinos / casinos.length * 100).toFixed(0) : 0;

    return {
        ...totals,
        roi,
        activeCasinos,
        profitableCasinos,
        profitablePercent
    };
}

function getTopCasinos(count = 10) {
    return [...casinos]
        .filter(c => c.profit > 0)
        .sort((a, b) => b.profit - a.profit)
        .slice(0, count);
}

function getBottomCasinos(count = 10) {
    return [...casinos]
        .filter(c => c.profit < 0)
        .sort((a, b) => a.profit - b.profit)
        .slice(0, count);
}

function getPerformanceBreakdown() {
    const positive = casinos.filter(c => c.profit > 0);
    const negative = casinos.filter(c => c.profit < 0);
    const zero = casinos.filter(c => c.profit === 0);

    const positiveProfit = positive.reduce((sum, c) => sum + c.profit, 0);
    const negativeProfit = negative.reduce((sum, c) => sum + c.profit, 0);

    return {
        positive: { count: positive.length, total: positiveProfit },
        negative: { count: negative.length, total: negativeProfit },
        zero: { count: zero.length }
    };
}

function getRecentActivity(count = 5) {
    return [...transactions]
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, count);
}

function generateInsights() {
    const metrics = calculateMetrics();
    const insights = [];

    // ROI Insight
    if (metrics.roi > 50) {
        insights.push({
            type: 'positive',
            icon: '▲',
            title: 'Excellent ROI',
            body: `You're crushing it with a ${metrics.roi.toFixed(1)}% return on investment! Your strategy is clearly working.`
        });
    } else if (metrics.roi > 0) {
        insights.push({
            type: 'positive',
            icon: '▲',
            title: 'Positive Returns',
            body: `You're profitable with a ${metrics.roi.toFixed(1)}% ROI. Keep focusing on what's working!`
        });
    } else if (metrics.roi < 0) {
        insights.push({
            type: 'negative',
            icon: '▼',
            title: 'Negative ROI',
            body: `Your current ROI is ${metrics.roi.toFixed(1)}%. Consider focusing on your most profitable casinos and cutting losses.`
        });
    }

    // Top Performers
    const topCasinos = getTopCasinos(3);
    if (topCasinos.length > 0) {
        insights.push({
            type: 'positive',
            icon: '★',
            title: 'Top Performers',
            body: 'Your best casinos are:',
            list: topCasinos.map(c => `${c.site}: ${formatCurrency(c.profit)} (${getROI(c.deposited, c.redeemed).toFixed(0)}% ROI)`)
        });
    }

    // Underperformers
    const bottomCasinos = getBottomCasinos(3);
    if (bottomCasinos.length > 0 && bottomCasinos[0].profit < -50) {
        insights.push({
            type: 'warning',
            icon: '!',
            title: 'Consider Avoiding',
            body: 'These casinos have significant losses:',
            list: bottomCasinos.map(c => `${c.site}: ${formatCurrency(c.profit)}`)
        });
    }

    // Inactive Casinos
    const inactiveCasinos = casinos.filter(c => c.deposited === 0 && c.redeemed === 0);
    if (inactiveCasinos.length > 5) {
        insights.push({
            type: 'warning',
            icon: '○',
            title: 'Inactive Casinos',
            body: `You have ${inactiveCasinos.length} casinos with no activity. Consider cleaning up your list.`
        });
    }

    // Concentration Risk
    const topThreeProfit = getTopCasinos(3).reduce((sum, c) => sum + c.profit, 0);
    const concentration = (topThreeProfit / metrics.profit) * 100;
    if (concentration > 70 && casinos.length > 5) {
        insights.push({
            type: 'warning',
            icon: '~',
            title: 'Concentration Risk',
            body: `${concentration.toFixed(0)}% of your profit comes from just 3 casinos. Consider diversifying your strategy.`
        });
    }

    return insights;
}

// Filtering and Sorting
function getFilteredCasinos() {
    let filtered = casinos.filter(c => {
        // Search
        if (searchTerm && !c.site.toLowerCase().includes(searchTerm)) return false;

        // Filter
        switch (currentFilter) {
            case 'positive': return c.profit > 0;
            case 'negative': return c.profit < 0;
            case 'zero': return c.profit === 0;
            case 'active': return c.deposited > 0 || c.redeemed > 0;
            case 'inactive': return c.deposited === 0 && c.redeemed === 0;
            default: return true;
        }
    });

    // Sort
    filtered.sort((a, b) => {
        const aVal = a[currentSort.field];
        const bVal = b[currentSort.field];

        if (typeof aVal === 'string') {
            return currentSort.desc ? bVal.localeCompare(aVal) : aVal.localeCompare(bVal);
        }
        return currentSort.desc ? bVal - aVal : aVal - bVal;
    });

    return filtered;
}

function getTransactionCount(casinoName) {
    return transactions.filter(t => t.casinoName === casinoName).length;
}

// Render Functions
function render() {
    switch (currentView) {
        case 'dashboard':
            renderDashboard();
            break;
        case 'casinos':
            renderCasinosTable();
            break;
        case 'insights':
            renderInsights();
            break;
    }
}

function renderDashboard() {
    const metrics = calculateMetrics();

    // Metrics
    document.getElementById('metricProfit').textContent = formatCurrency(metrics.profit);
    document.getElementById('metricProfit').className = 'metric-value profit ' + getProfitClass(metrics.profit);

    document.getElementById('metricDeposited').textContent = formatCurrency(metrics.deposited);
    document.getElementById('metricRedeemed').textContent = formatCurrency(metrics.redeemed);
    document.getElementById('metricROI').textContent = metrics.roi.toFixed(1) + '%';
    document.getElementById('metricActive').textContent = metrics.activeCasinos;
    document.getElementById('metricProfitable').textContent = metrics.profitableCasinos;
    document.getElementById('metricProfitablePercent').textContent = metrics.profitablePercent + '%';

    // Charts
    renderBarChart('topCasinosChart', getTopCasinos(10), true);
    renderBarChart('bottomCasinosChart', getBottomCasinos(10), false);
    renderROIDistribution();
    renderProfitLossDonut();

    // Performance Breakdown
    renderPerformanceBreakdown();

    // Top Opportunities
    renderTopOpportunities();

    // Risk Analysis
    renderRiskAnalysis();
}

function renderBarChart(containerId, data, isPositive) {
    const container = document.getElementById(containerId);
    if (data.length === 0) {
        container.innerHTML = '<div style="color: var(--text-secondary); text-align: center; padding: 40px;">No data available</div>';
        return;
    }

    const maxValue = Math.max(...data.map(c => Math.abs(c.profit)));

    container.innerHTML = data.map(casino => {
        const percent = (Math.abs(casino.profit) / maxValue) * 100;
        const roi = getROI(casino.deposited, casino.redeemed);

        return `
            <div class="chart-bar">
                <div class="chart-bar-label" title="${casino.site}">${casino.site}</div>
                <div class="chart-bar-track">
                    <div class="chart-bar-fill ${isPositive ? 'positive' : 'negative'}" style="width: ${percent}%">
                        ${percent > 15 ? formatCurrency(casino.profit) : ''}
                    </div>
                </div>
                <div class="chart-bar-value">${formatCurrency(casino.profit)}</div>
            </div>
        `;
    }).join('');
}

function renderPerformanceBreakdown() {
    const breakdown = getPerformanceBreakdown();
    const container = document.getElementById('performanceBreakdown');

    container.innerHTML = `
        <div class="stat-item">
            <div class="stat-item-label">Profitable Casinos</div>
            <div class="stat-item-value text-positive">${breakdown.positive.count} (${formatCurrency(breakdown.positive.total)})</div>
        </div>
        <div class="stat-item">
            <div class="stat-item-label">Losing Casinos</div>
            <div class="stat-item-value text-negative">${breakdown.negative.count} (${formatCurrency(breakdown.negative.total)})</div>
        </div>
        <div class="stat-item">
            <div class="stat-item-label">Break Even</div>
            <div class="stat-item-value">${breakdown.zero.count}</div>
        </div>
        <div class="stat-item">
            <div class="stat-item-label">Total Casinos</div>
            <div class="stat-item-value">${casinos.length}</div>
        </div>
    `;
}

function renderROIDistribution() {
    const container = document.getElementById('roiDistributionChart');
    if (!container) return;

    const ranges = [
        { label: '>100%', min: 100, max: Infinity },
        { label: '50-100%', min: 50, max: 100 },
        { label: '0-50%', min: 0, max: 50 },
        { label: '-50-0%', min: -50, max: 0 },
        { label: '<-50%', min: -Infinity, max: -50 }
    ];

    const distribution = ranges.map(range => ({
        label: range.label,
        count: casinos.filter(c => {
            if (c.deposited === 0) return false;
            const roi = getROI(c.deposited, c.redeemed);
            return roi >= range.min && (range.max === Infinity ? true : roi < range.max);
        }).length
    }));

    const maxCount = Math.max(...distribution.map(d => d.count), 1);

    container.innerHTML = distribution.map(d => {
        const percent = maxCount > 0 ? (d.count / maxCount) * 100 : 0;
        return `
            <div class="roi-bar">
                <div class="roi-bar-label">${d.label}</div>
                <div class="roi-bar-track">
                    <div class="roi-bar-fill" style="width: ${percent}%; background: var(--accent);"></div>
                </div>
                <div class="roi-bar-value">${d.count} casino${d.count !== 1 ? 's' : ''}</div>
            </div>
        `;
    }).join('');
}

function renderProfitLossDonut() {
    const container = document.getElementById('profitLossChart');
    if (!container) return;

    const breakdown = getPerformanceBreakdown();

    const totalPositive = Math.abs(breakdown.positive.total);
    const totalNegative = Math.abs(breakdown.negative.total);
    const total = totalPositive + totalNegative;

    if (total === 0) {
        container.innerHTML = '<div style="color: var(--text-secondary); text-align: center; padding: 40px;">No data available</div>';
        return;
    }

    const positivePercent = ((totalPositive / total) * 100).toFixed(1);
    const negativePercent = ((totalNegative / total) * 100).toFixed(1);

    container.innerHTML = `
        <div class="donut-chart">
            <div class="donut-visual">
                <svg class="donut-svg" width="160" height="160" viewBox="0 0 160 160">
                    <circle cx="80" cy="80" r="60" fill="none" stroke="var(--negative)" stroke-width="30"></circle>
                    <circle cx="80" cy="80" r="60" fill="none" stroke="var(--positive)" stroke-width="30"
                            stroke-dasharray="${(totalPositive / total) * 377} 377"></circle>
                </svg>
                <div class="donut-center">
                    <div class="donut-center-value">${positivePercent}%</div>
                    <div class="donut-center-label">Profit</div>
                </div>
            </div>
            <div class="donut-legend">
                <div class="donut-legend-item">
                    <div class="donut-legend-label">
                        <div class="donut-legend-color" style="background: var(--positive);"></div>
                        <span>Total Profit</span>
                    </div>
                    <div class="donut-legend-value text-positive">${formatCurrency(totalPositive)}</div>
                </div>
                <div class="donut-legend-item">
                    <div class="donut-legend-label">
                        <div class="donut-legend-color" style="background: var(--negative);"></div>
                        <span>Total Loss</span>
                    </div>
                    <div class="donut-legend-value text-negative">${formatCurrency(totalNegative)}</div>
                </div>
                <div class="donut-legend-item">
                    <div class="donut-legend-label">
                        <div class="donut-legend-color" style="background: var(--border);"></div>
                        <span>Net</span>
                    </div>
                    <div class="donut-legend-value ${getProfitClass(breakdown.positive.total + breakdown.negative.total)}">
                        ${formatCurrency(breakdown.positive.total + breakdown.negative.total)}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderTopOpportunities() {
    const container = document.getElementById('topOpportunities');
    if (!container) return;

    // Find casinos with high ROI and reasonable volume
    const opportunities = casinos
        .filter(c => c.profit > 0 && c.deposited > 10)
        .map(c => ({
            ...c,
            roi: getROI(c.deposited, c.redeemed)
        }))
        .sort((a, b) => b.roi - a.roi)
        .slice(0, 5);

    if (opportunities.length === 0) {
        container.innerHTML = '<div style="color: var(--text-secondary); padding: 20px 0;">No opportunities identified</div>';
        return;
    }

    container.innerHTML = opportunities.map(c => `
        <div class="stat-item">
            <div class="stat-item-label">${c.site}</div>
            <div class="stat-item-value text-positive">${c.roi.toFixed(0)}% ROI</div>
        </div>
    `).join('');
}

function renderRiskAnalysis() {
    const container = document.getElementById('riskAnalysis');
    if (!container) return;

    // Find casinos with significant losses or declining performance
    const risks = casinos
        .filter(c => c.profit < -50 || (c.deposited > 100 && c.redeemed === 0))
        .sort((a, b) => a.profit - b.profit)
        .slice(0, 5);

    if (risks.length === 0) {
        container.innerHTML = '<div style="color: var(--text-secondary); padding: 20px 0;">No significant risks identified</div>';
        return;
    }

    container.innerHTML = risks.map(c => {
        const reason = c.redeemed === 0 ? 'No redemptions' : 'Significant loss';
        return `
            <div class="stat-item">
                <div class="stat-item-label">${c.site}</div>
                <div class="stat-item-value text-negative">${formatCurrency(c.profit)}</div>
            </div>
        `;
    }).join('');
}

function renderCasinosTable() {
    const tbody = document.getElementById('tableBody');
    const filtered = getFilteredCasinos();

    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="9" style="text-align: center; padding: 40px; color: var(--text-secondary);">No casinos found</td></tr>';
        return;
    }

    tbody.innerHTML = filtered.map(casino => {
        const originalIndex = casinos.findIndex(c => c.site === casino.site);
        const domain = getRootDomain(casino.url);
        const roi = getROI(casino.deposited, casino.redeemed);
        const txCount = getTransactionCount(casino.site);

        return `
            <tr>
                <td><strong>${casino.site}</strong></td>
                <td>${domain ? `<a href="https://${domain}" target="_blank" rel="noopener">${domain}</a>` : '-'}</td>
                <td class="number">${formatCurrency(casino.deposited)}</td>
                <td class="number">${formatCurrency(casino.redeemed)}</td>
                <td class="number ${getProfitClass(casino.profit)}">${formatCurrency(casino.profit)}</td>
                <td class="number ${getProfitClass(roi)}">${roi.toFixed(1)}%</td>
                <td class="number">${txCount}</td>
                <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${casino.notes}">${casino.notes}</td>
                <td class="actions-col">
                    <div class="table-actions">
                        <button class="action-btn" onclick="openEditCasino(${originalIndex})">Edit</button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function renderInsights() {
    const insights = generateInsights();
    const container = document.getElementById('insightsContainer');

    if (insights.length === 0) {
        container.innerHTML = '<div style="color: var(--text-secondary); text-align: center; padding: 40px;">Add more data to get insights</div>';
        return;
    }

    container.innerHTML = insights.map(insight => `
        <div class="insight-card ${insight.type}">
            <div class="insight-header">
                <div class="insight-icon">${insight.icon}</div>
                <div class="insight-title">${insight.title}</div>
            </div>
            <div class="insight-body">
                ${insight.body}
                ${insight.list ? '<ul class="insight-list">' + insight.list.map(item => `<li>${item}</li>`).join('') + '</ul>' : ''}
            </div>
        </div>
    `).join('');
}

// Start the app
init();
