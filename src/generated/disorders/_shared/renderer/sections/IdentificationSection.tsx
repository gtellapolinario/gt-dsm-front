import {
  Cake,
  GraduationCap,
  MessageSquarePlus,
  User,
  Users,
  VenusAndMars,
} from "lucide-react";
import type { PatientSlice } from "../model/assessmentPort";
import { Input } from "@ui/input";
import { Field, FieldLabel } from "@ui/field";
import { Label } from "@ui/label";
import { RadioGroup, RadioGroupItem } from "@ui/radio-group";
import { Textarea } from "@ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/select";

export function IdentificationSection({
  assessment,
}: {
  readonly assessment: PatientSlice;
}) {
  const { state, setPatientField } = assessment;
  return (
    <div className="p-5 space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex flex-wrap gap-6">
        <Field className="w-72">
          <FieldLabel className="text-xs font-medium" htmlFor="paciente">
            <User className="h-4 w-4 text-blue-700" /> Nome
          </FieldLabel>
          <Input
            id="paciente"
            type="text"
            placeholder="Nome"
            className="text-xs bg-surface-2/60"
            value={state.patient.nomeId}
            onChange={(e) => setPatientField("nomeId", e.target.value)}
          />
        </Field>
        <Field className="w-48">
          <FieldLabel className="text-xs" htmlFor="dataNasc">
            <Cake className="h-4 w-4 text-blue-700" /> Data de nascimento
          </FieldLabel>
          <Input
            id="dataNasc"
            type="date"
            className="text-xs bg-surface-2/60"
            value={state.patient.dataNascimento}
            onChange={(e) => setPatientField("dataNascimento", e.target.value)}
          />
        </Field>
        <Field className="w-20">
          <FieldLabel className="text-xs">
            <VenusAndMars className="h-4 w-4 text-blue-700" /> Sexo
          </FieldLabel>
          <RadioGroup
            value={state.patient.sexo}
            onValueChange={(v) => setPatientField("sexo", v)}
            className="flex items-center gap-4 h-9"
          >
            <div className="flex items-center gap-1.5">
              <RadioGroupItem value="M" id="sexo-m" className="bg-surface-2/60 shadow-sm" />
              <Label className="text-xs" htmlFor="sexo-m">M</Label>
            </div>
            <div className="flex items-center gap-1.5">
              <RadioGroupItem value="F" id="sexo-f" className="bg-surface-2/60 shadow-sm" />
              <Label className="text-xs" htmlFor="sexo-f">F</Label>
            </div>
          </RadioGroup>
        </Field>
        <Field className="w-48">
          <FieldLabel className="text-xs" htmlFor="genero">
            <Users className="h-4 w-4 text-blue-700" /> Gênero
          </FieldLabel>
          <Select
            value={state.patient.genero}
            onValueChange={(v) => setPatientField("genero", v)}
          >
            <SelectTrigger id="genero" className="w-full text-xs bg-surface-2/60 shadow-sm">
              <SelectValue className="text-xs" placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mulher cis">Mulher cis</SelectItem>
              <SelectItem value="Homem cis">Homem cis</SelectItem>
              <SelectItem value="Mulher trans">Mulher trans</SelectItem>
              <SelectItem value="Homem trans">Homem trans</SelectItem>
              <SelectItem value="Não-binário">Não-binário</SelectItem>
              <SelectItem value="Outro">Outro</SelectItem>
              <SelectItem value="Prefiro não informar">
                Prefiro não informar
              </SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field className="w-60">
          <FieldLabel className="text-xs" htmlFor="escolaridade">
            <GraduationCap className="h-4 w-4 text-blue-700" /> Escolaridade
          </FieldLabel>
          <Select
            value={state.patient.escolaridade}
            onValueChange={(v) => setPatientField("escolaridade", v)}
          >
            <SelectTrigger id="escolaridade" className="w-full text-xs bg-surface-2/60 shadow-sm">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Ensino Fundamental Incompleto">
                Ensino Fundamental Incompleto
              </SelectItem>
              <SelectItem value="Ensino Fundamental Completo">
                Ensino Fundamental Completo
              </SelectItem>
              <SelectItem value="Ensino Médio Incompleto">
                Ensino Médio Incompleto
              </SelectItem>
              <SelectItem value="Ensino Médio Completo">
                Ensino Médio Completo
              </SelectItem>
              <SelectItem value="Ensino Técnico">Ensino Técnico</SelectItem>
              <SelectItem value="Ensino Superior Incompleto">
                Ensino Superior Incompleto
              </SelectItem>
              <SelectItem value="Ensino Superior Completo">
                Ensino Superior Completo
              </SelectItem>
              <SelectItem value="Pós-graduação">Pós-graduação</SelectItem>
              <SelectItem value="Mestrado">Mestrado</SelectItem>
              <SelectItem value="Doutorado">Doutorado</SelectItem>
              <SelectItem value="Outro">Outro</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>
      <div className="grid grid-cols-1 gap-3">

      </div>
      <Field>
        <FieldLabel className="text-xs font-medium" htmlFor="queixa">
          <MessageSquarePlus className="h-4 w-4 text-blue-700" /> Observações
        </FieldLabel>
        <Textarea
          id="queixa"
          rows={3}
          placeholder="Descreva o motivo da consulta e observações iniciais"
          value={state.patient.queixaPrincipal}
          onChange={(e) => setPatientField("queixaPrincipal", e.target.value)}
          className="text-xs bg-surface-2/60"
        />
      </Field>
    </div>
  );
}
