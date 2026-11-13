package com.jumanji.juma;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.appcompat.app.AppCompatActivity;

import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdSize;
import com.google.android.gms.ads.AdView;
import com.google.android.gms.ads.MobileAds;

public class MainActivity extends AppCompatActivity {

    private WebView jumanji;
    private AdView mAdView1;
    private AdView mAdView2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        if (getSupportActionBar() != null) {
            getSupportActionBar().hide();
        }

        jumanji = findViewById(R.id.jumanji);
        mAdView1 = findViewById(R.id.adView1);
        mAdView2 = findViewById(R.id.adView2);

        WebSettings webSettings = jumanji.getSettings();
        webSettings.setJavaScriptEnabled(true);

        jumanji.setWebViewClient(new WebViewClient());
        jumanji.loadUrl("https://jumanji-one-almir.aasiachonu.workers.dev/");

        configureAdaptiveBanner(mAdView1);
        configureAdaptiveBanner(mAdView2);

        MobileAds.initialize(this, initializationStatus -> {
            AdRequest adRequest = new AdRequest.Builder().build();

            mAdView1.loadAd(adRequest);
            mAdView2.loadAd(new AdRequest.Builder().build());
        });
    }

    private void configureAdaptiveBanner(AdView adView) {
        float density = getResources()
                .getDisplayMetrics().density;

        int screenWidthPixels = getResources()
                .getDisplayMetrics().widthPixels;

        int adWidthDp = (int) (screenWidthPixels / density);

        AdSize adaptiveSize =
                AdSize.getCurrentOrientationAnchoredAdaptiveBannerAdSize(
                        this,
                        adWidthDp
                );

        adView.setAdSize(adaptiveSize);
    }

    @Override
    protected void onResume() {
        super.onResume();

        if (jumanji != null) {
            jumanji.onResume();
        }

        if (mAdView1 != null) {
            mAdView1.resume();
        }

        if (mAdView2 != null) {
            mAdView2.resume();
        }
    }

    @Override
    protected void onPause() {
        if (jumanji != null) {
            jumanji.onPause();
        }

        if (mAdView1 != null) {
            mAdView1.pause();
        }

        if (mAdView2 != null) {
            mAdView2.pause();
        }

        super.onPause();
    }

    @Override
    protected void onDestroy() {
        if (mAdView1 != null) {
            mAdView1.destroy();
        }

        if (mAdView2 != null) {
            mAdView2.destroy();
        }

        if (jumanji != null) {
            jumanji.loadUrl("about:blank");
            jumanji.removeAllViews();
            jumanji.destroy();
        }

        super.onDestroy();
    }

    @Override
    public void onBackPressed() {
        if (jumanji != null && jumanji.canGoBack()) {
            jumanji.goBack();
        } else {
            super.onBackPressed();
        }
    }
}