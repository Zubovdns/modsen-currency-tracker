export interface MenuItem {
  name: string
  to: string
}

export interface MenuSection {
  title: string
  items: MenuItem[]
}
