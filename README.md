# ReVoC audio examples

This folder is a self-contained, anonymous static page for the ReVoC paper. It contains 12 matched examples and 76 24-kHz mono WAV files across LibriTTS Mel vocoding, EARS, and 3/6-kbps neural codec restoration. Each comparison card uses the same utterance and condition for its methods.

## Publish with GitHub Pages

1. Upload the **contents of this folder** to the root of a public repository created for anonymous review. Keep the `audio/` directory structure intact.
2. In the repository's **Settings → Pages**, choose **Deploy from a branch**, then select the branch and `/ (root)` folder.
3. Open the resulting Pages URL and play at least one example in each section.

The page uses relative paths and no build system or external scripts. To preview locally, run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000`.

Use a repository and account that do not reveal author identity during double-blind review. The page and WAV filenames themselves contain no author information, source-server paths, or private identifiers.

## Audio and data notes

- All examples are losslessly converted from the evaluation WAVs to browser-compatible 16-bit PCM at 24 kHz, without gain normalization or lossy compression.
- LibriTTS examples are from the fixed `dev-clean`/`dev-other` evaluation subset. The EARS examples are 10-second excerpts from out-of-domain evaluation audio. The codec examples include both 3 kbps (4 codebooks) and 6 kbps (8 codebooks).
- Dataset attribution: [LibriTTS](https://www.openslr.org/60/) is CC BY 4.0; [EARS](https://github.com/facebookresearch/ears_dataset) is CC BY-NC 4.0. EARS examples are supplied here for non-commercial research demonstration.

The page intentionally includes no author list, institution, repository URL, or download analytics.
