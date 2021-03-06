/**
 * Created by students on 2017/4/6.
 */
var log = new Object({
    Operate: {
        getLogData: function (type) {
            var point = [
                [1,2,44,77,5,6,7,8,9,'Firefox'],[1,2,35,4,5,8,7,8,9,'Chrome'],[1,2,66,4,5,99,7,8,9,10],
                [1,2,3,44,5,6,7,8,9,'Firefox'],[1,2,3,4,5,6,7,8,9,'Firefox'],[1,2,78,4,5,6,7,8,9,'Chrome'],
                [1,2,3,4,5,6,7,8,9,'Chrome'],[1,2,3,4,5,6,7,8,9,'Firefox'],[1,2,3,4,5,6,7,8,9,'Chrome']
            ];

            // 太长了overflow缩不回去
            var dollar = [
                [Date.UTC(2013,5,2),0.7695],
                [Date.UTC(2013,5,3),0.7648],
                [Date.UTC(2013,5,4),0.7645],
                [Date.UTC(2013,5,5),0.7638],
                [Date.UTC(2013,5,6),0.7549],
                [Date.UTC(2013,5,7),0.7562],
                [Date.UTC(2013,5,9),0.7574],
                [Date.UTC(2013,5,10),0.7543],
                [Date.UTC(2013,5,11),0.7510],
                [Date.UTC(2013,5,12),0.7498],
                [Date.UTC(2013,5,13),0.7477],
                [Date.UTC(2013,5,14),0.7492],
                [Date.UTC(2013,5,16),0.7487],
                [Date.UTC(2013,5,17),0.7480],
                [Date.UTC(2013,5,18),0.7466],
                [Date.UTC(2013,5,19),0.7521],
                [Date.UTC(2013,5,20),0.7564],
                [Date.UTC(2013,5,21),0.7621],
                [Date.UTC(2013,5,23),0.7630],
                [Date.UTC(2013,5,24),0.7623],
                [Date.UTC(2013,5,25),0.7644],
                [Date.UTC(2013,5,26),0.7685],
                [Date.UTC(2013,5,27),0.7671],
                [Date.UTC(2013,5,28),0.7687],
                [Date.UTC(2013,5,30),0.7687],
                [Date.UTC(2013,6,1),0.7654],
                [Date.UTC(2013,6,2),0.7705],
                [Date.UTC(2013,6,3),0.7687],
                [Date.UTC(2013,6,4),0.7744],
                [Date.UTC(2013,6,5),0.7793],
                [Date.UTC(2013,6,7),0.7804],
                [Date.UTC(2013,6,8),0.7770],
                [Date.UTC(2013,6,9),0.7824],
                [Date.UTC(2013,6,10),0.7705],
                [Date.UTC(2013,6,11),0.7635],
                [Date.UTC(2013,6,12),0.7652],
                [Date.UTC(2013,6,14),0.7656],
                [Date.UTC(2013,6,15),0.7655],
                [Date.UTC(2013,6,16),0.7598],
                [Date.UTC(2013,6,17),0.7619],
                [Date.UTC(2013,6,18),0.7628],
                [Date.UTC(2013,6,19),0.7609],
                [Date.UTC(2013,6,21),0.7599],
                [Date.UTC(2013,6,22),0.7584],
                [Date.UTC(2013,6,23),0.7562],
                [Date.UTC(2013,6,24),0.7575],
                [Date.UTC(2013,6,25),0.7531],
                [Date.UTC(2013,6,26),0.7530],
                [Date.UTC(2013,6,28),0.7526],
                [Date.UTC(2013,6,29),0.7540],
                [Date.UTC(2013,6,30),0.7540],
                [Date.UTC(2013,6,31),0.7518],
                [Date.UTC(2013,7,1),0.7571],
                [Date.UTC(2013,7,2),0.7529],
                [Date.UTC(2013,7,4),0.7532],
                [Date.UTC(2013,7,5),0.7542],
                [Date.UTC(2013,7,6),0.7515],
                [Date.UTC(2013,7,7),0.7498],
                [Date.UTC(2013,7,8),0.7473],
                [Date.UTC(2013,7,9),0.7494],
                [Date.UTC(2013,7,11),0.7497],
                [Date.UTC(2013,7,12),0.7519],
                [Date.UTC(2013,7,13),0.7540],
                [Date.UTC(2013,7,14),0.7543],
                [Date.UTC(2013,7,15),0.7492],
                [Date.UTC(2013,7,16),0.7502],
                [Date.UTC(2013,7,18),0.7503],
                [Date.UTC(2013,7,19),0.7499],
                [Date.UTC(2013,7,20),0.7453],
                [Date.UTC(2013,7,21),0.7487],
                [Date.UTC(2013,7,22),0.7487],
                [Date.UTC(2013,7,23),0.7472],
                [Date.UTC(2013,7,25),0.7471],
                [Date.UTC(2013,7,26),0.7480],
                [Date.UTC(2013,7,27),0.7467],
                [Date.UTC(2013,7,28),0.7497],
                [Date.UTC(2013,7,29),0.7552],
                [Date.UTC(2013,7,30),0.7562],
                [Date.UTC(2013,8,1),0.7572],
                [Date.UTC(2013,8,2),0.7581],
                [Date.UTC(2013,8,3),0.7593],
                [Date.UTC(2013,8,4),0.7571],
                [Date.UTC(2013,8,5),0.7622],
                [Date.UTC(2013,8,6),0.7588],
                [Date.UTC(2013,8,8),0.7591],
                [Date.UTC(2013,8,9),0.7544],
                [Date.UTC(2013,8,10),0.7537],
                [Date.UTC(2013,8,11),0.7512],
                [Date.UTC(2013,8,12),0.7519],
                [Date.UTC(2013,8,13),0.7522],
                [Date.UTC(2013,8,15),0.7486],
                [Date.UTC(2013,8,16),0.7500],
                [Date.UTC(2013,8,17),0.7486],
                [Date.UTC(2013,8,18),0.7396],
                [Date.UTC(2013,8,19),0.7391],
                [Date.UTC(2013,8,20),0.7394],
                [Date.UTC(2013,8,22),0.7389],
                [Date.UTC(2013,8,23),0.7411],
                [Date.UTC(2013,8,24),0.7422],
                [Date.UTC(2013,8,25),0.7393],
                [Date.UTC(2013,8,26),0.7413],
                [Date.UTC(2013,8,27),0.7396],
                [Date.UTC(2013,8,29),0.7410],
                [Date.UTC(2013,8,30),0.7393],
                [Date.UTC(2013,9,1),0.7393],
                [Date.UTC(2013,9,2),0.7365],
                [Date.UTC(2013,9,3),0.7343],
                [Date.UTC(2013,9,4),0.7376],
                [Date.UTC(2013,9,6),0.7370],
                [Date.UTC(2013,9,7),0.7362],
                [Date.UTC(2013,9,8),0.7368],
                [Date.UTC(2013,9,9),0.7393],
                [Date.UTC(2013,9,10),0.7397],
                [Date.UTC(2013,9,11),0.7385],
                [Date.UTC(2013,9,13),0.7377],
                [Date.UTC(2013,9,14),0.7374],
                [Date.UTC(2013,9,15),0.7395],
                [Date.UTC(2013,9,16),0.7389],
                [Date.UTC(2013,9,17),0.7312],
                [Date.UTC(2013,9,18),0.7307],
                [Date.UTC(2013,9,20),0.7309],
                [Date.UTC(2013,9,21),0.7308],
                [Date.UTC(2013,9,22),0.7256],
                [Date.UTC(2013,9,23),0.7258],
                [Date.UTC(2013,9,24),0.7247],
                [Date.UTC(2013,9,25),0.7244],
                [Date.UTC(2013,9,27),0.7244],
                [Date.UTC(2013,9,28),0.7255],
                [Date.UTC(2013,9,29),0.7275],
                [Date.UTC(2013,9,30),0.7280],
                [Date.UTC(2013,9,31),0.7361],
                [Date.UTC(2013,10,1),0.7415],
                [Date.UTC(2013,10,3),0.7411],
                [Date.UTC(2013,10,4),0.7399],
                [Date.UTC(2013,10,5),0.7421],
                [Date.UTC(2013,10,6),0.7400],
                [Date.UTC(2013,10,7),0.7452],
                [Date.UTC(2013,10,8),0.7479],
                [Date.UTC(2013,10,10),0.7492],
                [Date.UTC(2013,10,11),0.7460],
                [Date.UTC(2013,10,12),0.7442],
                [Date.UTC(2013,10,13),0.7415],
                [Date.UTC(2013,10,14),0.7429],
                [Date.UTC(2013,10,15),0.7410],
                [Date.UTC(2013,10,17),0.7417],
                [Date.UTC(2013,10,18),0.7405],
                [Date.UTC(2013,10,19),0.7386],
                [Date.UTC(2013,10,20),0.7441],
                [Date.UTC(2013,10,21),0.7418],
                [Date.UTC(2013,10,22),0.7376],
                [Date.UTC(2013,10,24),0.7379],
                [Date.UTC(2013,10,25),0.7399],
                [Date.UTC(2013,10,26),0.7369],
                [Date.UTC(2013,10,27),0.7365],
                [Date.UTC(2013,10,28),0.7350],
                [Date.UTC(2013,10,29),0.7358],
                [Date.UTC(2013,11,1),0.7362],
                [Date.UTC(2013,11,2),0.7385],
                [Date.UTC(2013,11,3),0.7359],
                [Date.UTC(2013,11,4),0.7357],
                [Date.UTC(2013,11,5),0.7317],
                [Date.UTC(2013,11,6),0.7297],
                [Date.UTC(2013,11,8),0.7296],
                [Date.UTC(2013,11,9),0.7279],
                [Date.UTC(2013,11,10),0.7267],
                [Date.UTC(2013,11,11),0.7254],
                [Date.UTC(2013,11,12),0.7270],
                [Date.UTC(2013,11,13),0.7276],
                [Date.UTC(2013,11,15),0.7278],
                [Date.UTC(2013,11,16),0.7267],
                [Date.UTC(2013,11,17),0.7263],
                [Date.UTC(2013,11,18),0.7307],
                [Date.UTC(2013,11,19),0.7319],
                [Date.UTC(2013,11,20),0.7315],
                [Date.UTC(2013,11,22),0.7311],
                [Date.UTC(2013,11,23),0.7301],
                [Date.UTC(2013,11,24),0.7308],
                [Date.UTC(2013,11,25),0.7310],
                [Date.UTC(2013,11,26),0.7304],
                [Date.UTC(2013,11,27),0.7277],
                [Date.UTC(2013,11,29),0.7272],
                [Date.UTC(2013,11,30),0.7244],
                [Date.UTC(2013,11,31),0.7275],
                [Date.UTC(2014,0,1),0.7271],
                [Date.UTC(2014,0,2),0.7314],
                [Date.UTC(2014,0,3),0.7359],
                [Date.UTC(2014,0,5),0.7355],
                [Date.UTC(2014,0,6),0.7338],
                [Date.UTC(2014,0,7),0.7345],
                [Date.UTC(2014,0,8),0.7366],
                [Date.UTC(2014,0,9),0.7349],
                [Date.UTC(2014,0,10),0.7316],
                [Date.UTC(2014,0,12),0.7315],
                [Date.UTC(2014,0,13),0.7315],
                [Date.UTC(2014,0,14),0.7310],
                [Date.UTC(2014,0,15),0.7350],
                [Date.UTC(2014,0,16),0.7341],
                [Date.UTC(2014,0,17),0.7385],
                [Date.UTC(2014,0,19),0.7392],
                [Date.UTC(2014,0,20),0.7379],
                [Date.UTC(2014,0,21),0.7373],
                [Date.UTC(2014,0,22),0.7381],
                [Date.UTC(2014,0,23),0.7301],
                [Date.UTC(2014,0,24),0.7311],
                [Date.UTC(2014,0,26),0.7306],
                [Date.UTC(2014,0,27),0.7314],
                [Date.UTC(2014,0,28),0.7316],
                [Date.UTC(2014,0,29),0.7319],
                [Date.UTC(2014,0,30),0.7377],
                [Date.UTC(2014,0,31),0.7415],
                [Date.UTC(2014,1,2),0.7414],
                [Date.UTC(2014,1,3),0.7393],
                [Date.UTC(2014,1,4),0.7397],
                [Date.UTC(2014,1,5),0.7389],
                [Date.UTC(2014,1,6),0.7358],
                [Date.UTC(2014,1,7),0.7334],
                [Date.UTC(2014,1,9),0.7343],
                [Date.UTC(2014,1,10),0.7328],
                [Date.UTC(2014,1,11),0.7332],
                [Date.UTC(2014,1,12),0.7356],
                [Date.UTC(2014,1,13),0.7309],
                [Date.UTC(2014,1,14),0.7304],
                [Date.UTC(2014,1,16),0.7300],
                [Date.UTC(2014,1,17),0.7295],
                [Date.UTC(2014,1,18),0.7268],
                [Date.UTC(2014,1,19),0.7281],
                [Date.UTC(2014,1,20),0.7289],
                [Date.UTC(2014,1,21),0.7278],
                [Date.UTC(2014,1,23),0.7280],
                [Date.UTC(2014,1,24),0.7280],
                [Date.UTC(2014,1,25),0.7275],
                [Date.UTC(2014,1,26),0.7306],
                [Date.UTC(2014,1,27),0.7295],
                [Date.UTC(2014,1,28),0.7245],
                [Date.UTC(2014,2,2),0.7259],
                [Date.UTC(2014,2,3),0.7280],
                [Date.UTC(2014,2,4),0.7276],
                [Date.UTC(2014,2,5),0.7282],
                [Date.UTC(2014,2,6),0.7215],
                [Date.UTC(2014,2,7),0.7206],
                [Date.UTC(2014,2,9),0.7206],
                [Date.UTC(2014,2,10),0.7207],
                [Date.UTC(2014,2,11),0.7216],
                [Date.UTC(2014,2,12),0.7192],
                [Date.UTC(2014,2,13),0.7210],
                [Date.UTC(2014,2,14),0.7187],
                [Date.UTC(2014,2,16),0.7188],
                [Date.UTC(2014,2,17),0.7183],
                [Date.UTC(2014,2,18),0.7177],
                [Date.UTC(2014,2,19),0.7229],
                [Date.UTC(2014,2,20),0.7258],
                [Date.UTC(2014,2,21),0.7249],
                [Date.UTC(2014,2,23),0.7247],
                [Date.UTC(2014,2,24),0.7226],
                [Date.UTC(2014,2,25),0.7232],
                [Date.UTC(2014,2,26),0.7255],
                [Date.UTC(2014,2,27),0.7278],
                [Date.UTC(2014,2,28),0.7271],
                [Date.UTC(2014,2,30),0.7272],
                [Date.UTC(2014,2,31),0.7261],
                [Date.UTC(2014,3,1),0.7250],
                [Date.UTC(2014,3,2),0.7264],
                [Date.UTC(2014,3,3),0.7289],
                [Date.UTC(2014,3,4),0.7298],
                [Date.UTC(2014,3,6),0.7298],
                [Date.UTC(2014,3,7),0.7278],
                [Date.UTC(2014,3,8),0.7248],
                [Date.UTC(2014,3,9),0.7218],
                [Date.UTC(2014,3,10),0.7200],
                [Date.UTC(2014,3,11),0.7202],
                [Date.UTC(2014,3,13),0.7222],
                [Date.UTC(2014,3,14),0.7236],
                [Date.UTC(2014,3,15),0.7239],
                [Date.UTC(2014,3,16),0.7238],
                [Date.UTC(2014,3,17),0.7238],
                [Date.UTC(2014,3,18),0.7238],
                [Date.UTC(2014,3,20),0.7239],
                [Date.UTC(2014,3,21),0.7250],
                [Date.UTC(2014,3,22),0.7244],
                [Date.UTC(2014,3,23),0.7238],
                [Date.UTC(2014,3,24),0.7229],
                [Date.UTC(2014,3,25),0.7229],
                [Date.UTC(2014,3,27),0.7226],
                [Date.UTC(2014,3,28),0.7220],
                [Date.UTC(2014,3,29),0.7240],
                [Date.UTC(2014,3,30),0.7211],
                [Date.UTC(2014,4,1),0.7210],
                [Date.UTC(2014,4,2),0.7209],
                [Date.UTC(2014,4,4),0.7209],
                [Date.UTC(2014,4,5),0.7207],
                [Date.UTC(2014,4,6),0.7180],
                [Date.UTC(2014,4,7),0.7188],
                [Date.UTC(2014,4,8),0.7225],
                [Date.UTC(2014,4,9),0.7268],
                [Date.UTC(2014,4,11),0.7267],
                [Date.UTC(2014,4,12),0.7269],
                [Date.UTC(2014,4,13),0.7297],
                [Date.UTC(2014,4,14),0.7291],
                [Date.UTC(2014,4,15),0.7294],
                [Date.UTC(2014,4,16),0.7302],
                [Date.UTC(2014,4,18),0.7298],
                [Date.UTC(2014,4,19),0.7295],
                [Date.UTC(2014,4,20),0.7298],
                [Date.UTC(2014,4,21),0.7307],
                [Date.UTC(2014,4,22),0.7323],
                [Date.UTC(2014,4,23),0.7335],
                [Date.UTC(2014,4,25),0.7338],
                [Date.UTC(2014,4,26),0.7329],
                [Date.UTC(2014,4,27),0.7335],
                [Date.UTC(2014,4,28),0.7358],
                [Date.UTC(2014,4,29),0.7351],
                [Date.UTC(2014,4,30),0.7337],
                [Date.UTC(2014,5,1),0.7338],
                [Date.UTC(2014,5,2),0.7355],
                [Date.UTC(2014,5,3),0.7338],
                [Date.UTC(2014,5,4),0.7353],
                [Date.UTC(2014,5,5),0.7321],
                [Date.UTC(2014,5,6),0.7330],
                [Date.UTC(2014,5,8),0.7327],
                [Date.UTC(2014,5,9),0.7356],
                [Date.UTC(2014,5,10),0.7381],
                [Date.UTC(2014,5,11),0.7389],
                [Date.UTC(2014,5,12),0.7379],
                [Date.UTC(2014,5,13),0.7384],
                [Date.UTC(2014,5,15),0.7388],
                [Date.UTC(2014,5,16),0.7367],
                [Date.UTC(2014,5,17),0.7382],
                [Date.UTC(2014,5,18),0.7356],
                [Date.UTC(2014,5,19),0.7349],
                [Date.UTC(2014,5,20),0.7353],
                [Date.UTC(2014,5,22),0.7357],
                [Date.UTC(2014,5,23),0.7350],
                [Date.UTC(2014,5,24),0.7350],
                [Date.UTC(2014,5,25),0.7337],
                [Date.UTC(2014,5,26),0.7347],
                [Date.UTC(2014,5,27),0.7327],
                [Date.UTC(2014,5,29),0.7330],
                [Date.UTC(2014,5,30),0.7304],
                [Date.UTC(2014,6,1),0.7310],
                [Date.UTC(2014,6,2),0.7320],
                [Date.UTC(2014,6,3),0.7347],
                [Date.UTC(2014,6,4),0.7356],
                [Date.UTC(2014,6,6),0.7360],
                [Date.UTC(2014,6,7),0.7350],
                [Date.UTC(2014,6,8),0.7346],
                [Date.UTC(2014,6,9),0.7329],
                [Date.UTC(2014,6,10),0.7348],
                [Date.UTC(2014,6,11),0.7349],
                [Date.UTC(2014,6,13),0.7352],
                [Date.UTC(2014,6,14),0.7342],
                [Date.UTC(2014,6,15),0.7369],
                [Date.UTC(2014,6,16),0.7393],
                [Date.UTC(2014,6,17),0.7392],
                [Date.UTC(2014,6,18),0.7394],
                [Date.UTC(2014,6,20),0.7390],
                [Date.UTC(2014,6,21),0.7395],
                [Date.UTC(2014,6,22),0.7427],
                [Date.UTC(2014,6,23),0.7427],
                [Date.UTC(2014,6,24),0.7428],
                [Date.UTC(2014,6,25),0.7446],
                [Date.UTC(2014,6,27),0.7447],
                [Date.UTC(2014,6,28),0.7440],
                [Date.UTC(2014,6,29),0.7458],
                [Date.UTC(2014,6,30),0.7464],
                [Date.UTC(2014,6,31),0.7469],
                [Date.UTC(2014,7,1),0.7446],
                [Date.UTC(2014,7,3),0.7447],
                [Date.UTC(2014,7,4),0.7450],
                [Date.UTC(2014,7,5),0.7477],
                [Date.UTC(2014,7,6),0.7472],
                [Date.UTC(2014,7,7),0.7483],
                [Date.UTC(2014,7,8),0.7457],
                [Date.UTC(2014,7,10),0.7460],
                [Date.UTC(2014,7,11),0.7470],
                [Date.UTC(2014,7,12),0.7480],
                [Date.UTC(2014,7,13),0.7482],
                [Date.UTC(2014,7,14),0.7482],
                [Date.UTC(2014,7,15),0.7463],
                [Date.UTC(2014,7,17),0.7469],
                [Date.UTC(2014,7,18),0.7483],
                [Date.UTC(2014,7,19),0.7508],
                [Date.UTC(2014,7,20),0.7541],
                [Date.UTC(2014,7,21),0.7529],
                [Date.UTC(2014,7,22),0.7551],
                [Date.UTC(2014,7,24),0.7577],
                [Date.UTC(2014,7,25),0.7580],
                [Date.UTC(2014,7,26),0.7593],
                [Date.UTC(2014,7,27),0.7580],
                [Date.UTC(2014,7,28),0.7585],
                [Date.UTC(2014,7,29),0.7614],
                [Date.UTC(2014,7,31),0.7618],
                [Date.UTC(2014,8,1),0.7618],
                [Date.UTC(2014,8,2),0.7614],
                [Date.UTC(2014,8,3),0.7604],
                [Date.UTC(2014,8,4),0.7725],
                [Date.UTC(2014,8,5),0.7722],
                [Date.UTC(2014,8,7),0.7721],
                [Date.UTC(2014,8,8),0.7753],
                [Date.UTC(2014,8,9),0.7730],
                [Date.UTC(2014,8,10),0.7742],
                [Date.UTC(2014,8,11),0.7736],
                [Date.UTC(2014,8,12),0.7713],
                [Date.UTC(2014,8,14),0.7717],
                [Date.UTC(2014,8,15),0.7727],
                [Date.UTC(2014,8,16),0.7716],
                [Date.UTC(2014,8,17),0.7772],
                [Date.UTC(2014,8,18),0.7739],
                [Date.UTC(2014,8,19),0.7794],
                [Date.UTC(2014,8,21),0.7788],
                [Date.UTC(2014,8,22),0.7782],
                [Date.UTC(2014,8,23),0.7784],
                [Date.UTC(2014,8,24),0.7824],
                [Date.UTC(2014,8,25),0.7843],
                [Date.UTC(2014,8,26),0.7884],
                [Date.UTC(2014,8,28),0.7891],
                [Date.UTC(2014,8,29),0.7883],
                [Date.UTC(2014,8,30),0.7916],
                [Date.UTC(2014,9,1),0.7922],
                [Date.UTC(2014,9,2),0.7893],
                [Date.UTC(2014,9,3),0.7989],
                [Date.UTC(2014,9,5),0.7992],
                [Date.UTC(2014,9,6),0.7903],
                [Date.UTC(2014,9,7),0.7893],
                [Date.UTC(2014,9,8),0.7853],
                [Date.UTC(2014,9,9),0.7880],
                [Date.UTC(2014,9,10),0.7919],
                [Date.UTC(2014,9,12),0.7912],
                [Date.UTC(2014,9,13),0.7842],
                [Date.UTC(2014,9,14),0.7900],
                [Date.UTC(2014,9,15),0.7790],
                [Date.UTC(2014,9,16),0.7806],
                [Date.UTC(2014,9,17),0.7835],
                [Date.UTC(2014,9,19),0.7844],
                [Date.UTC(2014,9,20),0.7813],
                [Date.UTC(2014,9,21),0.7864],
                [Date.UTC(2014,9,22),0.7905],
                [Date.UTC(2014,9,23),0.7907],
                [Date.UTC(2014,9,24),0.7893],
                [Date.UTC(2014,9,26),0.7889],
                [Date.UTC(2014,9,27),0.7875],
                [Date.UTC(2014,9,28),0.7853],
                [Date.UTC(2014,9,29),0.7916],
                [Date.UTC(2014,9,30),0.7929],
                [Date.UTC(2014,9,31),0.7984],
                [Date.UTC(2014,10,2),0.7999],
                [Date.UTC(2014,10,3),0.8012],
                [Date.UTC(2014,10,4),0.7971],
                [Date.UTC(2014,10,5),0.8009],
                [Date.UTC(2014,10,6),0.8081],
                [Date.UTC(2014,10,7),0.8030],
                [Date.UTC(2014,10,9),0.8025],
                [Date.UTC(2014,10,10),0.8051],
                [Date.UTC(2014,10,11),0.8016],
                [Date.UTC(2014,10,12),0.8040],
                [Date.UTC(2014,10,13),0.8015],
                [Date.UTC(2014,10,14),0.7985],
                [Date.UTC(2014,10,16),0.7988],
                [Date.UTC(2014,10,17),0.8032],
                [Date.UTC(2014,10,18),0.7976],
                [Date.UTC(2014,10,19),0.7965],
                [Date.UTC(2014,10,20),0.7975],
                [Date.UTC(2014,10,21),0.8071],
                [Date.UTC(2014,10,23),0.8082],
                [Date.UTC(2014,10,24),0.8037],
                [Date.UTC(2014,10,25),0.8016],
                [Date.UTC(2014,10,26),0.7996],
                [Date.UTC(2014,10,27),0.8022],
                [Date.UTC(2014,10,28),0.8031],
                [Date.UTC(2014,10,30),0.8040],
                [Date.UTC(2014,11,1),0.8020],
                [Date.UTC(2014,11,2),0.8075],
                [Date.UTC(2014,11,3),0.8123],
                [Date.UTC(2014,11,4),0.8078],
                [Date.UTC(2014,11,5),0.8139],
                [Date.UTC(2014,11,7),0.8135],
                [Date.UTC(2014,11,8),0.8119],
                [Date.UTC(2014,11,9),0.8081],
                [Date.UTC(2014,11,10),0.8034],
                [Date.UTC(2014,11,11),0.8057],
                [Date.UTC(2014,11,12),0.8024],
                [Date.UTC(2014,11,14),0.8024],
                [Date.UTC(2014,11,15),0.8040],
                [Date.UTC(2014,11,16),0.7993],
                [Date.UTC(2014,11,17),0.8102],
                [Date.UTC(2014,11,18),0.8139],
                [Date.UTC(2014,11,19),0.8177],
                [Date.UTC(2014,11,21),0.8180],
                [Date.UTC(2014,11,22),0.8176],
                [Date.UTC(2014,11,23),0.8215],
                [Date.UTC(2014,11,24),0.8200],
                [Date.UTC(2014,11,25),0.8182],
                [Date.UTC(2014,11,26),0.8213],
                [Date.UTC(2014,11,28),0.8218],
                [Date.UTC(2014,11,29),0.8229],
                [Date.UTC(2014,11,30),0.8225],
                [Date.UTC(2014,11,31),0.8266],
                [Date.UTC(2015,0,1),0.8262],
                [Date.UTC(2015,0,2),0.8331],
                [Date.UTC(2015,0,4),0.8371],
                [Date.UTC(2015,0,5),0.8380],
                [Date.UTC(2015,0,6),0.8411],
                [Date.UTC(2015,0,7),0.8447],
                [Date.UTC(2015,0,8),0.8480],
                [Date.UTC(2015,0,9),0.8445],
                [Date.UTC(2015,0,11),0.8425],
                [Date.UTC(2015,0,12),0.8451],
                [Date.UTC(2015,0,13),0.8495],
                [Date.UTC(2015,0,14),0.8482],
                [Date.UTC(2015,0,15),0.8598],
                [Date.UTC(2015,0,16),0.8643],
                [Date.UTC(2015,0,18),0.8648],
                [Date.UTC(2015,0,19),0.8617],
                [Date.UTC(2015,0,20),0.8658],
                [Date.UTC(2015,0,21),0.8613],
                [Date.UTC(2015,0,22),0.8798],
                [Date.UTC(2015,0,23),0.8922],
                [Date.UTC(2015,0,25),0.8990],
                [Date.UTC(2015,0,26),0.8898],
                [Date.UTC(2015,0,27),0.8787],
                [Date.UTC(2015,0,28),0.8859],
                [Date.UTC(2015,0,29),0.8834],
                [Date.UTC(2015,0,30),0.8859],
                [Date.UTC(2015,1,1),0.8843],
                [Date.UTC(2015,1,2),0.8817],
                [Date.UTC(2015,1,3),0.8710],
                [Date.UTC(2015,1,4),0.8813],
                [Date.UTC(2015,1,5),0.8713],
                [Date.UTC(2015,1,6),0.8837],
                [Date.UTC(2015,1,8),0.8839],
                [Date.UTC(2015,1,9),0.8831],
                [Date.UTC(2015,1,10),0.8833],
                [Date.UTC(2015,1,11),0.8823],
                [Date.UTC(2015,1,12),0.8770],
                [Date.UTC(2015,1,13),0.8783],
                [Date.UTC(2015,1,15),0.8774],
                [Date.UTC(2015,1,16),0.8807],
                [Date.UTC(2015,1,17),0.8762],
                [Date.UTC(2015,1,18),0.8774],
                [Date.UTC(2015,1,19),0.8798],
                [Date.UTC(2015,1,20),0.8787],
                [Date.UTC(2015,1,22),0.8787],
                [Date.UTC(2015,1,23),0.8824],
                [Date.UTC(2015,1,24),0.8818],
                [Date.UTC(2015,1,25),0.8801],
                [Date.UTC(2015,1,26),0.8931],
                [Date.UTC(2015,1,27),0.8932],
                [Date.UTC(2015,2,1),0.8960],
                [Date.UTC(2015,2,2),0.8941],
                [Date.UTC(2015,2,3),0.8948],
                [Date.UTC(2015,2,4),0.9026],
                [Date.UTC(2015,2,5),0.9066],
                [Date.UTC(2015,2,6),0.9222],
                [Date.UTC(2015,2,8),0.9221],
                [Date.UTC(2015,2,9),0.9214],
                [Date.UTC(2015,2,10),0.9347],
                [Date.UTC(2015,2,11),0.9482],
                [Date.UTC(2015,2,12),0.9403],
                [Date.UTC(2015,2,13),0.9528],
                [Date.UTC(2015,2,15),0.9541],
                [Date.UTC(2015,2,16),0.9462],
                [Date.UTC(2015,2,17),0.9435],
                [Date.UTC(2015,2,18),0.9203],
                [Date.UTC(2015,2,19),0.9381],
                [Date.UTC(2015,2,20),0.9241],
                [Date.UTC(2015,2,22),0.9237],
                [Date.UTC(2015,2,23),0.9135],
                [Date.UTC(2015,2,24),0.9152],
                [Date.UTC(2015,2,25),0.9114],
                [Date.UTC(2015,2,26),0.9188],
                [Date.UTC(2015,2,27),0.9184],
                [Date.UTC(2015,2,29),0.9188],
                [Date.UTC(2015,2,30),0.9231],
                [Date.UTC(2015,2,31),0.9319],
                [Date.UTC(2015,3,1),0.9291],
                [Date.UTC(2015,3,2),0.9188],
                [Date.UTC(2015,3,3),0.9109],
                [Date.UTC(2015,3,5),0.9091],
                [Date.UTC(2015,3,6),0.9154],
                [Date.UTC(2015,3,7),0.9246],
                [Date.UTC(2015,3,8),0.9276],
                [Date.UTC(2015,3,9),0.9382],
                [Date.UTC(2015,3,10),0.9431],
                [Date.UTC(2015,3,12),0.9426],
                [Date.UTC(2015,3,13),0.9463],
                [Date.UTC(2015,3,14),0.9386],
                [Date.UTC(2015,3,15),0.9357],
                [Date.UTC(2015,3,16),0.9293],
                [Date.UTC(2015,3,17),0.9254],
                [Date.UTC(2015,3,19),0.9251],
                [Date.UTC(2015,3,20),0.9312],
                [Date.UTC(2015,3,21),0.9315],
                [Date.UTC(2015,3,22),0.9323],
                [Date.UTC(2015,3,23),0.9236],
                [Date.UTC(2015,3,24),0.9196],
                [Date.UTC(2015,3,26),0.9201],
                [Date.UTC(2015,3,27),0.9184],
                [Date.UTC(2015,3,28),0.9106],
                [Date.UTC(2015,3,29),0.8983],
                [Date.UTC(2015,3,30),0.8909],
                [Date.UTC(2015,4,1),0.8928],
                [Date.UTC(2015,4,3),0.8941],
                [Date.UTC(2015,4,4),0.8972],
                [Date.UTC(2015,4,5),0.8940],
                [Date.UTC(2015,4,6),0.8808],
                [Date.UTC(2015,4,7),0.8876],
                [Date.UTC(2015,4,8),0.8925],
                [Date.UTC(2015,4,10),0.8934],
                [Date.UTC(2015,4,11),0.8964],
                [Date.UTC(2015,4,12),0.8917],
                [Date.UTC(2015,4,13),0.8805],
                [Date.UTC(2015,4,14),0.8764],
                [Date.UTC(2015,4,15),0.8732],
                [Date.UTC(2015,4,17),0.8737],
                [Date.UTC(2015,4,18),0.8838],
                [Date.UTC(2015,4,19),0.8969],
                [Date.UTC(2015,4,20),0.9014],
                [Date.UTC(2015,4,21),0.8999],
                [Date.UTC(2015,4,22),0.9076],
                [Date.UTC(2015,4,24),0.9098],
                [Date.UTC(2015,4,25),0.9110],
                [Date.UTC(2015,4,26),0.9196],
                [Date.UTC(2015,4,27),0.9170],
                [Date.UTC(2015,4,28),0.9133],
                [Date.UTC(2015,4,29),0.9101],
                [Date.UTC(2015,4,31),0.9126],
                [Date.UTC(2015,5,1),0.9151],
                [Date.UTC(2015,5,2),0.8965],
                [Date.UTC(2015,5,3),0.8871],
                [Date.UTC(2015,5,4),0.8898],
                [Date.UTC(2015,5,5),0.8999],
                [Date.UTC(2015,5,7),0.9004],
                [Date.UTC(2015,5,8),0.8857],
                [Date.UTC(2015,5,9),0.8862],
                [Date.UTC(2015,5,10),0.8829],
                [Date.UTC(2015,5,11),0.8882],
                [Date.UTC(2015,5,12),0.8873],
                [Date.UTC(2015,5,14),0.8913],
                [Date.UTC(2015,5,15),0.8862],
                [Date.UTC(2015,5,16),0.8891],
                [Date.UTC(2015,5,17),0.8821],
                [Date.UTC(2015,5,18),0.8802],
                [Date.UTC(2015,5,19),0.8808],
                [Date.UTC(2015,5,21),0.8794],
                [Date.UTC(2015,5,22),0.8818],
                [Date.UTC(2015,5,23),0.8952],
                [Date.UTC(2015,5,24),0.8924],
                [Date.UTC(2015,5,25),0.8925],
                [Date.UTC(2015,5,26),0.8955],
                [Date.UTC(2015,5,28),0.9113],
                [Date.UTC(2015,5,29),0.8900],
                [Date.UTC(2015,5,30),0.8950]
            ];
            //   表格网页
            if(type=="table"){
                log.View.input(point);    // 利用获取的point数组里的数据进行 表格 绘制
            }
            //   图表网页
            if(type=="charts"){
                log.View.draw(dollar);      // 利用获取的point数组里的数据进行 图表 绘制
            }
            if(type=="pie"){
                log.View.pie(point);      // 利用获取的point数组里的数据进行 扇形图 绘制
            }
        }
    },
    View: {
        input: function(point) {
            var loginTitle=[
                { title: "No." },
                { title: "Rank" },
                { title: "Account" },
                { title: "IP" },
                { title: "Page" },
                { title: "Status" },
                { title: "Login<br>Time" },
                { title: "Logout<br>Time" },
                { title: "Stay<br>Time" },
                { title: "Source<br>Page" },
                { title: "Browser" }
            ]
            for(var id=0;id<point.length;id++){
                point[id].splice(0,0,id+1);          // 第一列编号
            }
            /*var date1 = new Date('2013/04/02 18:00')
             var date2 = new Date('2013/04/02 19:22:21')

             var s1 = date1.getTime(),s2 = date2.getTime();
             var total = (s2 - s1)/1000;

             var day = parseInt(total / (24*60*60));//计算整数天数
             var afterDay = total - day*24*60*60;//取得算出天数后剩余的秒数
             var hour = parseInt(afterDay/(60*60));//计算整数小时数
             var afterHour = total - day*24*60*60 - hour*60*60;//取得算出小时数后剩余的秒数
             var min = parseInt(afterHour/60);//计算整数分
             var afterMin = total - day*24*60*60 - hour*60*60 - min*60;//取得算出分后剩余的秒数
             */      // 时间转换
            $('#dt3').DataTable( {
                data: point,
                "bRetrieve": true,
                "bJQueryUI": true,
                "sPaginationType": "full_numbers",
                "lengthMenu": [[15, 25, 50, -1], [15, 25, 50, "All"]],   //  自定义数量
                columns: loginTitle,
                initComplete: function () {
                    this.api().columns().every( function () {
                        var column = this;
                        var select = $('<select><option value=""></option></select>')
                            .appendTo( $(column.footer()).empty() )
                            .on( 'change', function () {
                                var val = $.fn.dataTable.util.escapeRegex(
                                    $(this).val()
                                );

                                column
                                    .search( val ? '^'+val+'$' : '', true, false )
                                    .draw();
                            } );

                        column.data().unique().sort().each( function ( d, j ) {
                            select.append( '<option value="'+d+'">'+d+'</option>' )
                        } );
                    } );
                }
            } );
        },
        draw: function (dollar) {
            $('#flot-lines').highcharts({
                chart: {
                    zoomType: 'x'
                },
                title: {
                    text: '网站查询量走势图'
                },
                subtitle: {
                    text: document.ontouchstart === undefined ?
                        '鼠标拖动可以进行缩放' : '手势操作进行缩放'
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        millisecond: '%H:%M:%S.%L',
                        second: '%H:%M:%S',
                        minute: '%H:%M',
                        hour: '%H:%M',
                        day: '%m-%d',
                        week: '%m-%d',
                        month: '%Y-%m',
                        year: '%Y'
                    }
                },
                tooltip: {
                    dateTimeLabelFormats: {
                        millisecond: '%H:%M:%S.%L',
                        second: '%H:%M:%S',
                        minute: '%H:%M',
                        hour: '%H:%M',
                        day: '%Y-%m-%d',
                        week: '%m-%d',
                        month: '%Y-%m',
                        year: '%Y'
                    }
                },
                yAxis: {
                    title: {
                        text: '查询量'
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                series: [{
                    type: 'area',
                    name: '查询量',    //  坐标图上的点
                    data: dollar
                }]
            });
        },
        pie: function (point) {
            var options=$("#pie-chart option:selected").val();  // 获取select按钮的值
            var options2=$("#chartStyle option:selected").val();  // 获取select按钮的值

            var Count;                //  最终画图的数组
            var titleText;
            var seriesName;
            var ColumnText;

            // 画图的公用函数
            function Draw(options) {
                var publicCount = {};
                var id;  //  决定了point[][id]
                switch(options)
                {
                    case 'CancerType':
                        id=4,
                            titleText = "用户输入不同CancerType百分比",
                            seriesName = "查询百分比",
                            ColumnText = "用户输入CancerType频数"
                        break;
                    case 'GeneName':
                        id=5,
                            titleText = "用户输入不同GeneName百分比",
                            seriesName = "查询百分比",
                            ColumnText = "用户输入GeneName频数"
                        break;
                    case 'DataType_X':
                        id=6,
                            titleText = "用户输入不同DataType_X百分比",
                            seriesName = "查询百分比",
                            ColumnText = "用户输入DataType_X频数"
                        break;
                    case 'DataType_Y':
                        id=7,
                            titleText = "用户输入不同DataType_Y百分比",
                            seriesName = "查询百分比",
                            ColumnText = "用户输入DataType_Y频数"
                        break;
                    case 'SampleType':
                        id=8,
                            titleText = "用户输入不同SampleType百分比",
                            seriesName = "查询百分比",
                            ColumnText = "用户输入SampleType频数"
                        break;
                    case 'IsLog':
                        id=9,
                            titleText = "对数与非对数所占百分比",
                            seriesName = "查询百分比"
                            ColumnText = "对数与非对数频数"
                        break;
                }
                for (var i = 0, len = point.length; i < len; i++) {
                    var el = point[i][id];   //  这都是要根据真实数据结构改的
                    var uniqueEl = el;
                    if (!publicCount[uniqueEl]) {
                        publicCount[uniqueEl] = 1;
                    }else{
                        publicCount[uniqueEl]++;
                    }
                }

                var arr = Object.keys(publicCount);
                var publicPoint = [];

                for (var publicID = 0; publicID < Object.getOwnPropertyNames(publicCount).length; publicID++) {
                    publicPoint.push([arr[publicID], publicCount[arr[publicID]]]);
                }
                Count = publicPoint;
            }

            //  如果选择的是饼图选项
            if(options2=="Pie"){    //   绘制扇形图
                $("#sliders").css('display','none');
                Draw(options);
                if(options=="Month") {
                    var monthCount =
                        {
                            'January': 0,
                            'February': 0,
                            'March': 0,
                            'April': 0,
                            'May': 0,
                            'June': 0,
                            'July': 0,
                            'August': 0,
                            'September': 0,
                            'October': 0,
                            'November': 0,
                            'December': 0
                        }
                    for (var id = 0; id < point.length; id++) {   // 把月份都放在一个数组里
                        //var oldTime = (new Date(dollar[0])).getTime(); //得到毫秒数
                        var newTime = new Date(point[id][6]); //就得到普通的时间了
                        var m1 = newTime.getMonth();
                        switch (m1) {
                            case 1:
                                monthCount.January += 1
                                break;
                            case 2:
                                monthCount.February += 1
                                break;
                            case 3:
                                monthCount.March += 1
                                break;
                            case 4:
                                monthCount.April += 1
                                break;
                            case 5:
                                monthCount.May += 1
                                break;
                            case 6:
                                monthCount.June += 1
                                break;
                            case 7:
                                monthCount.July += 1
                                break;
                            case 8:
                                monthCount.August += 1
                                break;
                            case 9:
                                monthCount.September += 1
                                break;
                            case 10:
                                monthCount.October += 1
                                break;
                            case 11:
                                monthCount.November += 1
                                break;
                            case 12:
                                monthCount.December += 1
                                break;
                        }
                    }    //  按月份计数

                    var arr = Object.keys(monthCount);
                    var monthPoint = [];

                    for (var monthID = 0; monthID < 12; monthID++) {
                        monthPoint.push([arr[monthID], monthCount[arr[monthID]]]);
                    }
                    Count = monthPoint;
                }      //  这个是采用枚举，对象与属性方法
                if(options=="Year"){
                    var yearCount =
                        {
                            '2017' : 0,
                            '2018' : 0,
                            '2019' : 0,
                            '2020' : 0,
                            '2021' : 0,
                            '2022' : 0,
                            '2023' : 0,
                            '2024' : 0,
                            '2025' : 0,
                            '2026' : 0,
                            '2027' : 0,
                            '2028' : 0,
                            'others' : 0
                        }
                    for(var id=0;id<point.length;id++){   // 把月份都放在一个数组里
                        //var oldTime = (new Date(dollar[0])).getTime(); //得到毫秒数
                        var newTime = new Date(point[id][6]); //就得到普通的时间了
                        var y1=newTime.getYear();
                        switch(y1)
                        {
                            case 2017:
                                yearCount['2017']+=1
                                break;
                            case 2018:
                                yearCount['2018']+=1
                                break;
                            case 2019:
                                yearCount['2019']+=1
                                break;
                            case 2020:
                                yearCount['2020']+=1
                                break;
                            case 2021:
                                yearCount['2021']+=1
                                break;
                            case 2022:
                                yearCount['2022']+=1
                                break;
                            case 2023:
                                yearCount['2023']+=1
                                break;
                            case 2024:
                                yearCount['2024']+=1
                                break;
                            case 2025:
                                yearCount['2025']+=1
                                break;
                            case 2026:
                                yearCount['2026']+=1
                                break;
                            case 2027:
                                yearCount['2027']+=1
                                break;
                            case 2028:
                                yearCount['2028']+=1
                                break;
                            default:
                                yearCount['others']+=1
                        }
                    }    //  按月份计数

                    var arr = Object.keys(yearCount);
                    var yearPoint=[];

                    for(var yearID=0;yearID<13;yearID++){
                        yearPoint.push([arr[yearID],yearCount[arr[yearID]]]);
                    }
                    Count = yearPoint;
                }       //  Date格式还没想好怎么用公共函数处理
                $('#flot-pie').highcharts({
                    chart: {
                        type: 'pie',
                        options3d: {
                            enabled: true,
                            alpha: 45,
                            beta: 0
                        }
                    },
                    title: {
                        text: titleText
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            depth: 35,
                            dataLabels: {
                                enabled: true,
                                format:'{point.name}'     //
                            }
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: seriesName,
                        data: Count
                        /*[
                         ['Firefox',   45.0],
                         ['IE',       26.8],
                         ['Chrome',       26.8],
                         {
                         name: 'Chrome',
                         y: 12.8,
                         sliced: true,
                         selected: true
                         },
                         ['Safari',    8.5],
                         ['Opera',     6.2],
                         ['Others',   0.7]
                         ]*/
                    }]
                });
            }

            if(options2=="Column"){      //  如果选中了Column
                $("#sliders").css('display','block');
                Draw(options);
                if(options=="Month") {
                    var monthCount =
                        {
                            'January': 0,
                            'February': 0,
                            'March': 0,
                            'April': 0,
                            'May': 0,
                            'June': 0,
                            'July': 0,
                            'August': 0,
                            'September': 0,
                            'October': 0,
                            'November': 0,
                            'December': 0
                        }
                    for (var id = 0; id < point.length; id++) {   // 把月份都放在一个数组里
                        //var oldTime = (new Date(dollar[0])).getTime(); //得到毫秒数
                        var newTime = new Date(point[id][6]); //就得到普通的时间了
                        var m1 = newTime.getMonth();
                        switch (m1) {
                            case 1:
                                monthCount.January += 1
                                break;
                            case 2:
                                monthCount.February += 1
                                break;
                            case 3:
                                monthCount.March += 1
                                break;
                            case 4:
                                monthCount.April += 1
                                break;
                            case 5:
                                monthCount.May += 1
                                break;
                            case 6:
                                monthCount.June += 1
                                break;
                            case 7:
                                monthCount.July += 1
                                break;
                            case 8:
                                monthCount.August += 1
                                break;
                            case 9:
                                monthCount.September += 1
                                break;
                            case 10:
                                monthCount.October += 1
                                break;
                            case 11:
                                monthCount.November += 1
                                break;
                            case 12:
                                monthCount.December += 1
                                break;
                        }
                    }    //  按月份计数

                    var arr = Object.keys(monthCount);
                    var monthPoint = [];

                    for (var monthID = 0; monthID < 12; monthID++) {
                        monthPoint.push([arr[monthID], monthCount[arr[monthID]]]);
                    }
                    Count = monthPoint;
                }      //  这个是采用枚举，对象与属性方法
                if(options=="Year"){
                    var yearCount =
                        {
                            '2017' : 0,
                            '2018' : 0,
                            '2019' : 0,
                            '2020' : 0,
                            '2021' : 0,
                            '2022' : 0,
                            '2023' : 0,
                            '2024' : 0,
                            '2025' : 0,
                            '2026' : 0,
                            '2027' : 0,
                            '2028' : 0,
                            'others' : 0
                        }
                    for(var id=0;id<point.length;id++){   // 把月份都放在一个数组里
                        //var oldTime = (new Date(dollar[0])).getTime(); //得到毫秒数
                        var newTime = new Date(point[id][6]); //就得到普通的时间了
                        var y1=newTime.getYear();
                        switch(y1)
                        {
                            case 2017:
                                yearCount['2017']+=1
                                break;
                            case 2018:
                                yearCount['2018']+=1
                                break;
                            case 2019:
                                yearCount['2019']+=1
                                break;
                            case 2020:
                                yearCount['2020']+=1
                                break;
                            case 2021:
                                yearCount['2021']+=1
                                break;
                            case 2022:
                                yearCount['2022']+=1
                                break;
                            case 2023:
                                yearCount['2023']+=1
                                break;
                            case 2024:
                                yearCount['2024']+=1
                                break;
                            case 2025:
                                yearCount['2025']+=1
                                break;
                            case 2026:
                                yearCount['2026']+=1
                                break;
                            case 2027:
                                yearCount['2027']+=1
                                break;
                            case 2028:
                                yearCount['2028']+=1
                                break;
                            default:
                                yearCount['others']+=1
                        }
                    }    //  按月份计数

                    var arr = Object.keys(yearCount);
                    var yearPoint=[];

                    for(var yearID=0;yearID<13;yearID++){
                        yearPoint.push([arr[yearID],yearCount[arr[yearID]]]);
                    }
                    Count = yearPoint;
                }       //  Date格式还没想好怎么用公共函数处理
                $(function () {
                    var chart = new Highcharts.Chart({
                        chart: {
                            renderTo: 'flot-pie',
                            type: 'column',
                            options3d: {
                                enabled: true,
                                alpha: 15,
                                beta: 15,
                                depth: 50,
                                viewDistance: 25
                            }
                        },
                        title: {
                            text: '3D柱状查询图'
                        },
                        subtitle: {
                            text: ''
                        },
                        plotOptions: {
                            column: {
                                depth: 25
                            }
                        },
                        xAxis: {
                            title: {
                                text: '类型'
                            }
                        },
                        yAxis: {
                            title: {
                                text: '查询量'
                            }
                        },
                        series: [{
                            name: ColumnText,
                            data: Count
                        }]
                    });
                    function showValues() {
                        $('#alpha-value').html(chart.options.chart.options3d.alpha);
                        $('#beta-value').html(chart.options.chart.options3d.beta);
                        $('#depth-value').html(chart.options.chart.options3d.depth);
                    }
                    // Activate the sliders
                    $('#sliders input').on('input change', function () {
                        chart.options.chart.options3d[this.id] = this.value;
                        showValues();
                        chart.redraw(false);
                    });
                    showValues();
                });
            }
        }
    }
})

var dataSet = [
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
];
