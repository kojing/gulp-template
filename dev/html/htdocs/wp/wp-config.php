<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link http://wpdocs.sourceforge.jp/wp-config.php_%E3%81%AE%E7%B7%A8%E9%9B%86
 *
 * @package WordPress
 */

// 注意: 
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.sourceforge.jp/Codex:%E8%AB%87%E8%A9%B1%E5%AE%A4 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define('DB_NAME', 'guntu_blog');

/** MySQL データベースのユーザー名 */
define('DB_USER', 'root');

/** MySQL データベースのパスワード */
define('DB_PASSWORD', 'root');

/** MySQL のホスト名 */
define('DB_HOST', 'localhost');

/** データベースのテーブルを作成する際のデータベースの文字セット */
define('DB_CHARSET', 'utf8mb4');

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define('DB_COLLATE', '');

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'DEtquPs+;u@T;w~<wFsQd~Q^*S%xwepwdSj?!j`WAz*MZ28xFip;JLPBUQy3,_:l');
define('SECURE_AUTH_KEY',  '?.,b><+x%_nSa!_YxDE?,w&s;<|)^r8C_&_P%lC<8(Eh/:$s8E1Lp&YnjTqiD6Pk');
define('LOGGED_IN_KEY',    'xQ qRuYvKDr%K)o5@{d%-RR*?Io@5Oh#TW+_zFq*Lb8SG1%Zvm4=2rw uD5eIMvW');
define('NONCE_KEY',        '06D?{q0dS:Eh~*320=3qmUPV!9V`igofDbYxkUd|G2fth$KQcN^e70--DDg$W^;Y');
define('AUTH_SALT',        'YuU,aN@Q{s)YA RJ`+-U~ld`_:`HJ83J)nfX8&74v(<c9<jwrkoq,pn=*1?7}g5{');
define('SECURE_AUTH_SALT', '[Fqp|[ >op[wQcD`;{W@fg1bxt%DAv(FRy4Cu7iy9Q0evV<>Cp6g.Pm5,ns$c!F0');
define('LOGGED_IN_SALT',   'rK.7N*hU|6Od<O(J-R 77Z,>nCX4U&GGgjyfE82q.StO?l=[J5[!>lRJ|/0U)J5)');
define('NONCE_SALT',       '@3d@]I<~W)N^+3lm9X$yMsgaV[5R18d]r<v`%{NMSs}M<ZR!iW@p187(7f;x{R?u');

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix  = 'wp_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数については Codex をご覧ください。
 *
 * @link http://wpdocs.osdn.jp/WordPress%E3%81%A7%E3%81%AE%E3%83%87%E3%83%90%E3%83%83%E3%82%B0
 */
define('WP_DEBUG', false);

/* 編集が必要なのはここまでです ! WordPress でブログをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
