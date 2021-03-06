import { ProjectSource } from '~/assets/models/project-sources'
export class Project {
  readonly name: string
  readonly description: string
  readonly year: number | null
  readonly source: ProjectSource | null
  readonly techsUsed: Array<string>
  readonly url: string | null
  constructor(
    description: string,
    name: string | null = null,
    year: number | null = null,
    techsUsed: Array<string> = [],
    source: ProjectSource | null = null,
    url: string | null = null
  ) {
    this.description = description
    this.name = name || `My${year != null ? ' ' + year.toString() : ''} Project`
    this.year = year
    this.source = source
    // [...x] makes a shallow copy of x
    this.techsUsed = [...techsUsed].sort() // alphabetize
    this.url = url
  }
}
export default Project
