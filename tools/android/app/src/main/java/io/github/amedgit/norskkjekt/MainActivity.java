package io.github.amedgit.norskkjekt;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.view.WindowInsets;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

/**
 * Norsk Kjekt — envoltorio nativo mínimo.
 *
 * Carga la web publicada en un WebView a pantalla completa, sin barra de
 * direcciones. Los enlaces externos se abren en el navegador y el botón atrás
 * navega dentro del curso antes de cerrar la app.
 */
public class MainActivity extends Activity {

    private static final String HOME = "https://amedgit.github.io/norsk-kjekt/";
    private WebView web;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);

        web = new WebView(this);
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setCacheMode(WebSettings.LOAD_DEFAULT);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(false);
        s.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        s.setUserAgentString(s.getUserAgentString() + " NorskKjektApp/1.0");

        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri url = request.getUrl();
                String host = url.getHost();
                if (host != null && host.equals("amedgit.github.io")) {
                    return false;
                }
                return openExternally(url);
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                if (request.isForMainFrame()) {
                    showOffline();
                }
            }
        });

        web.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onPermissionRequest(android.webkit.PermissionRequest request) {
                request.deny();
            }
        });

        web.setDownloadListener((url, userAgent, contentDisposition, mimeType, contentLength) ->
                openExternally(Uri.parse(url)));

        // Respeta la barra de estado y la de navegación (edge-to-edge en Android 15+).
        web.setOnApplyWindowInsetsListener((View v, WindowInsets insets) -> {
            v.setPadding(0, insets.getSystemWindowInsetTop(), 0, insets.getSystemWindowInsetBottom());
            return insets;
        });

        setContentView(web);

        if (state == null) {
            web.loadUrl(HOME);
        } else {
            web.restoreState(state);
        }
    }

    private boolean openExternally(Uri url) {
        try {
            startActivity(new Intent(Intent.ACTION_VIEW, url));
        } catch (Exception e) {
            Toast.makeText(this, "No hay app para abrir este enlace", Toast.LENGTH_SHORT).show();
        }
        return true;
    }

    private void showOffline() {
        String html = "<!doctype html><html lang='es'><head><meta charset='utf-8'>"
                + "<meta name='viewport' content='width=device-width, initial-scale=1'>"
                + "<style>body{margin:0;min-height:100vh;display:grid;place-items:center;"
                + "font-family:system-ui,sans-serif;background:#f5f6f8;color:#101c33;text-align:center;padding:24px}"
                + "h1{font-size:1.3rem;margin:.4rem 0}p{color:#6b7a92;font-size:.95rem;max-width:30ch}"
                + "a{display:inline-block;margin-top:1rem;background:#ba0c2f;color:#fff;text-decoration:none;"
                + "padding:.7rem 1.2rem;border-radius:12px;font-weight:700}</style></head><body><div>"
                + "<div style='font-size:2.5rem'>📡</div><h1>Sin conexión</h1>"
                + "<p>Norsk Kjekt necesita internet la primera vez. Comprueba tu conexión y vuelve a intentarlo.</p>"
                + "<a href='" + HOME + "'>Reintentar</a></div></body></html>";
        web.loadDataWithBaseURL(HOME, html, "text/html", "utf-8", null);
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK && web != null && web.canGoBack()) {
            web.goBack();
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        if (web != null) web.saveState(outState);
    }

    @Override
    protected void onDestroy() {
        if (web != null) {
            web.destroy();
            web = null;
        }
        super.onDestroy();
    }
}
