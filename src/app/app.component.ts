import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  VERSION,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('divExterno') divExterno: ElementRef;
  name = 'Angular ' + VERSION.major;

  constructor(private renderer: Renderer2) {}
  addElement() {
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML =
      '<h1 style="text-align: center;"><span style="font-family: Impact, Charcoal, sans-serif; color: rgb(56, 118, 29);">NÃO HAVERÁ ATENDIMENTO DO SUPORTE NO DIA 23/03</span></h1><p style=""><span style="font-family: Arial, Helvetica, sans-serif;">Prezados(as),</span></p><p>No dia <strong>23 de Março de 2022</strong>, quarta-feira, das 9h as 17h, acontecerá a <strong>Reunião Anual de Planejamento Estratégico da Subsecretaria de Políticas e Ações da Saúde</strong>. </p><p>Devido a necessidade de participação de todos da equipe, informamos que&nbsp;<strong><u>n</u></strong><strong><u>ão realizaremos atendimento do suporte SIGAF</u></strong> (via telefone, e-mail ou Central de Ajuda)&nbsp;<strong><u>durante esse período</u></strong>.</p><p>Agradecemos a compreensão de todos</p><p>Coordenação de Qualidade e Gestão da Informação.&nbsp;</p>';
    this.renderer.appendChild(this.divExterno.nativeElement, p);
  }

  ngAfterViewInit() {
    this.addElement();
  }
}
