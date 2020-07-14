### TODO

#### Navbar

- [ ] Render circular icon for navbar link
  - [ ] Maybe this can be done using `li::before` and asci
- [ ] Add colors to config to be used in svg
- [x] Map config to navbar rendering
- [ ] Make the subheadings map off their parent
- [ ] Create notion of `active` heading
  - [x] Set up `onHover` handler
  - [ ] Set up `onClick` handler
  - [ ] `onHover` : shadow of link mirrors its circle
- [ ] Style the navbar
  - [x] Subheadings have smaller font
  - [ ] Smaller circles as well
  - [x] Subheadings are not expanded unless `active`
- [ ] Implement escape hatch
  - [ ] Style with slightly smnaller font-size
  - [ ] Add `Back to top` link
  - [ ] Some kind of fun button!

### Pages

- [ ] Wow building out pages is more work than I expected
  - [x] Import react-routing
  - [ ] Setup correct browser / build configs
  - [ ] Add `Link` to each page
- [ ] Add components and hook up to `Navbar`
- [ ] On scroll, navbar should nav to pages and update `active`-ness

### Animations

- [ ] Parallax effect || intersection observer
- [x] Use `AnimatePresence` for smoother transition of subheadings
- [ ] Create progress bar (reusable for each projects page)
- [ ] Loading logo
  - [ ] Create `Loader` component?

### Polish backlog

- [ ] Find awesome font
- [ ] Change favicon lol
- [ ] Use (https://codepen.io/bchiang7/pen/GgdOKE)[this for color highlight on hover]

### Cleanup

- [ ] Add `vars.css`
- [ ] Refactor using new awesome vars
- [ ] Mobile ???
