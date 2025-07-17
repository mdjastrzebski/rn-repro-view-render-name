This repo contains RN 0.81-rc.0 patched with https://github.com/facebook/react-native/pull/52625


Repro steps

1. Fetch the repo: git clone https://github.com/mdjastrzebski/rn-repro-view-render-name
2. cd rn-repro-view-render-name yarn install
3. yarn test
4. Inspect the repro.test.tsx file to see that the `<View />` snapshot produces `<View_withRef />`.

Then switch to `display-name` branche, which sets `View.displayName = 'View'` to showcase that renders `<View />` correctly.
