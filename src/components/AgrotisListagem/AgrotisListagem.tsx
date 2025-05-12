import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Typography,
  Tooltip,
  Modal,
  Button,
  Box,
  Popover,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import type { ListagemProps } from './AgrotisListagem.type';
import { useState } from 'react';
import AgrotisBox from '../AgrotisBox';
import { useAgendamentoAnalise } from '../../context/AgendamentoAnaliseContext/AgendamentoAnaliseContext';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

export const ListaRegistros = ({ agendamentos }: ListagemProps) => {
  const navigate = useNavigate();
  const { deletar } = useAgendamentoAnalise();

  const [openModal, setOpenModal] = useState(false);
  const [observacoes, setObservacoes] = useState<string | undefined>('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpenModal = (obs: string | undefined) => {
    setObservacoes('Sem Observações');
    if (obs) {
      setObservacoes(obs);
    }
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement>,
    id: string | undefined,
    obs: string | undefined
  ) => {
    if (id) {
      setObservacoes(obs || 'Sem Observações');
      setAnchorEl(event.currentTarget);
      setSelectedId(id);
    }
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const handleEdit = () => {
    if (selectedId) {
      navigate(`/edicao/${selectedId}`);
    }
    handlePopoverClose();
  };
  const handleDelete = (id: string) => {
    setSelectedId(id);
    setOpen(true);
  };

  const confirmarDelete = () => {
    if (selectedId) {
      deletar(selectedId);
    }
    setOpen(false);
    setSelectedId(null);
  };

  const cancelarDelete = () => {
    setOpen(false);
    setSelectedId(null);
  };

  const openPopover = Boolean(anchorEl);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Código</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Data Inicial</TableCell>
            <TableCell>Data Final</TableCell>
            <TableCell>Propriedade(s)</TableCell>
            <TableCell>Laboratório</TableCell>
            <TableCell>Obs.</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {agendamentos.map((r) => (
            <TableRow key={r.id}>
              <TableCell>{r.id}</TableCell>
              <TableCell>{r.nome}</TableCell>
              <TableCell>
                {dayjs(r.dataInicial).format('DD/MM/YYYY')}
              </TableCell>{' '}
              <TableCell>{dayjs(r.dataFinal).format('DD/MM/YYYY')}</TableCell>{' '}
              <TableCell>
                {r.propriedades.length > 1 ? (
                  <Typography color="primary" sx={{ cursor: 'pointer' }}>
                    ({r.propriedades.length}) propriedades
                  </Typography>
                ) : (
                  r.propriedades.length > 0 && r.propriedades[0].nome
                )}
              </TableCell>
              <TableCell>{r.laboratorio?.nome}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleOpenModal(r.observacoes)}>
                  <ChatBubbleOutlineIcon />
                </IconButton>
              </TableCell>
              <TableCell>
                <Tooltip title="Opções">
                  <IconButton
                    onClick={(e) => handlePopoverOpen(e, r.id, r.observacoes)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal open={openModal} onClose={handleCloseModal}>
        <>
          <AgrotisBox
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 600,
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 24,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                backgroundColor: (theme) => theme.palette.primary.main,
                color: 'white',
                padding: '8px',
                borderRadius: '4px',
              }}
            >
              Observações
            </Typography>
            <Typography p={'16px'} variant="body1" sx={{ marginTop: '16px' }}>
              {observacoes}
            </Typography>
            <AgrotisBox
              sx={{
                backgroundColor: (theme) => theme.palette.grey[200],
                justifyContent: 'end',
                width: '100%',
                height: '56px',
                display: 'flex',
                p: 1,
              }}
            >
              <Button
                onClick={handleCloseModal}
                sx={{
                  marginTop: '16px',
                  alignSelf: 'flex-end',
                }}
              >
                Fechar
              </Button>
            </AgrotisBox>
          </AgrotisBox>
        </>
      </Modal>

      <Popover
        open={openPopover}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box
          sx={{
            width: '200px',
            padding: '8px',
            backgroundColor: 'background.paper',
            boxShadow: 2,
            borderRadius: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{ cursor: 'pointer' }}
            onClick={handleEdit}
          >
            Editar
          </Typography>
          <Typography
            variant="body2"
            sx={{ cursor: 'pointer', marginTop: '8px' }}
            onClick={() => handleDelete(selectedId!)}
          >
            Deletar
          </Typography>
        </Box>
      </Popover>
      <Dialog open={open} onClose={cancelarDelete}>
        <DialogTitle>Confirmar exclusão</DialogTitle>
        <DialogContent>Tem certeza que deseja excluir este item?</DialogContent>
        <DialogActions>
          <Button onClick={cancelarDelete}>Cancelar</Button>
          <Button onClick={confirmarDelete} color="error">
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
