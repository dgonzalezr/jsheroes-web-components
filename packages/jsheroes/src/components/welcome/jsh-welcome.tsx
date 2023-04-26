import { Component, Prop, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'jsh-welcome',
  styleUrl: './jsh-welcome.scss',
  assetsDirs: ['./assets'],
  shadow: true,
})
export class JshWelcome {
  /** The day the conference will start (e.g. `May 18`) */
  @Prop() dayStart: string;

  /** The day the conference ends (e.g. `20th`) */
  @Prop() dayEnd: string;

  /** The month in which the conference is taking place (e.g. `May`) */
  @Prop() month: string;

  /** The year in which the conference is taking place (e.g. `2023`) */
  @Prop() year: string;

  /** The city where the conference is taking place (e.g. `Cluj-Napoca, Romania` )  */
  @Prop() city: string;

  render() {
    return (
      <div class="relative flex h-[550px] items-center justify-center bg-blue-950">
        <img class="h-full w-full object-cover" src={getAssetPath('./assets/background-jsheroes.svg')} />
        <div class="absolute flex flex-col items-center gap-4 text-white">
          <img src={getAssetPath('./assets/logo-dark.svg')} alt="JSHeroes" />
          <div>
            <strong>Open-Source</strong> Community Event
          </div>

          <div class="text-4xl my-4">
            {this.month} <span class="text-5xl">{this.dayStart}-{this.dayEnd}</span> {this.year}
          </div>

          <p>{this.city}</p>
          <a
            href="https://ti.to/jsheroes/2023"
            target="_blank"
            rel="noreferrer noopener"
            class="rounded-2xl bg-yellow-300 px-8 py-2 text-xl text-gray-950 decoration-gray-950 transition-colors duration-300 hover:bg-pink-700"
          >
            Buy tickets
          </a>
        </div>
      </div>
    );
  }
}
